//Đối tượng validator
function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //hàm thực hiện validate
    function validate(inputElement, rule) {
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        // var errorMessage = rule.test(inputElement.value);
        var errorMessage;

        //Lấy ra rules của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule và kiểm tra
        //Nếu có lỗi dừng việc kiểm tra
        for(var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);                    
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        // thêm ! để conver sang kiểu bollean
        return !errorMessage;
    }

    //lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        //Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();
            var isFormValid = true;

            //thực hiện lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            });

            

            if(isFormValid) {
                // console.log('ko có lỗi');
                //Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function') {
                    //Lấy tất cả các element có astribu là name
                    var enableInputs =  formElement.querySelectorAll('[name]');

                    // console.log(enableInput);

                    var formValue = Array.from(enableInputs).reduce(function(values, input) {
                        switch(input.type) {
                            case 'radio':
                                if(input.matches(':checked')){
                                    values[input.name] = input.value;}

                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    },{});

                    options.onSubmit(formValue);
                }
                //Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            } 
            // else {
            //     console.log('có lỗi');
            // }
        }

        //lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {
            
            //Lưu lại các rule cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // Xử lý và đặt trong vòng lặp để lấy được tất cả cái checkbox và radio
            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach(function(inputElement) {
                if(inputElement) {
                    //Xử lý trường hợp khi blur khỏi input
                    inputElement.onblur = function() {
                        //value: inputElement.value
                        //test func: rule.test                    
                        validate(inputElement, rule);
                    }
    
                    //xử lý khi người dùng nhập vào input
                    inputElement.oninput = function () {
                        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }
                }
            });

            

        });
        // console.log(selectorRules)
    }
}



//Định nghĩa rules
//nguyên tắc của các rule
// 1. Khi có lỗi => message lỗi
// 2. Khi hợp lệ => ko trả ra cái gì cả
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            // return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
            if((typeof value) === 'object'){
                return value ? undefined : message || 'Vui lòng nhập trường này';
            }
            // console.log(typeof value);
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            //check email: 'javascript email regex'
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email';
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}