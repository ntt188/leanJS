
function Validator(formSelector) {
    var _this = this;

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};
    /**
     * Quy ước tạo rule:
     * - nếu có lỗi return `error message`
     * - nếu không có lỗi return `undefined`
     */
    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`;
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập dưới ${max} ký tự`;
            }
        }
    }

    // lấy ra formElement trong DOM theo formselector
    var formElement = document.querySelector(formSelector);

    // chỉ xử lý khi có element trong DOM
    if(formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');

        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');

            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];

                    // console.log(validatorRules[rule](ruleInfo[1]));
                }

                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                // console.log(rule)
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }


            // Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];

            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }

            // rules.find(function(rule) {
            //     errorMessage = rule(event.target.value);
            //     return errorMessage;
            // });
            // console.log(errorMessage);
            // nếu có lỗi thì hiển thị ra UI
            if(errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup) {
                    formGroup.classList.add('invalid');

                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        // hàm clear message lỗi
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
            }
            var formMessage = formGroup.querySelector('.form-message');
            if(formMessage) {
                formMessage.innerText = '';
            }
        }

        // xử lý hành vi submit form
        formElement.onsubmit = function(event) {
            event.preventDefault();
            var inputs = formElement.querySelectorAll('[name][rules]');
            var isValid = true;

            for (var input of inputs) {
                if(!handleValidate({target: input})) {
                    isValid = false;
                }
            }
            

            // Khi ko có lỗi thì submit form
            if(isValid) {
                

                if(typeof _this.onSubmit === 'function') {

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

                    // Gọi lại hàm onSubmit và trả về kèm giá trị của form
                    _this.onSubmit(formValue);
                } else {
                    formElement.submit();
                }
            }
        }

        // console.log(formRules);

    }
}