// Callback
//     Là hàm(function) được truyền qua một đối số khi gọi hàm khác:
//     1. Là hàm
//     2.Được truyền qua 1 đối số

    function myFunction(param) {
        //kiểm tra đối số truyền vào có phải function nếu ko phải thì sẽ lỗi
        if(typeof param === 'function') {
            param('Học lập trình');
        }
    }

    function myCallBack(value) {
        console.log('value: ',value)
    }

    myFunction(myCallBack);
    //vậy Callback là 1 hàm được gọi trong 1 hàm khác

    //Phần 2
        //Là Hàm
        //Truyền qua đối số
        //Được gọi lại (trong hàm nhận đối số)
        //Tạo hàm map
        Array.prototype.myMap = function(cb) {
        var output = [], lengthArr = this.length;

        for (var i = 0; i < lengthArr; i++){
            var tam = cb(this[i], i);
            output.push(tam);
        }

        return output;
        }

        // Expected results
        var numbers = [1, 2, 3];

        console.log(numbers.myMap(function (number) {
            return number * 2;
        })) 
        // Output: [2, 4, 6]

        console.log(numbers.myMap(function (number, index) {
            return number * index;
        })) 
        // Output: [0, 2, 6]
        //Tạo phương thức myEvery như every
        Array.prototype.myEvery = function(cb) {
        for(var index in this) {
            if(this.hasOwnProperty(index)){
                if(!cb(this[index],index,this)){
                    return false;
                }
            }
        }
        return true;
        }


        // Expected results

        var numbers = [1, 3, 3, 5];

        console.log(numbers.myEvery(function (number) {
            return number % 2 !== 0;
        })); // Output: true

        console.log(numbers.myEvery(function (number, index) {
            return index % 2 === 0;
        })); // Output: false

        console.log(numbers.myEvery(function (number, index, array) {
            return array.length % 2 === 0;
        })); // Output: true