// Làm việc với số
//         Kiểu dữ liệu số
            // Number.isFiite()                   Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
                Number.isFinite(2 / 0); // false
                Number.isFinite(20 / 5); // true
                Number.isFinite(0 / 0); // false
            // Number.isInteger()                  Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
                Number.isInteger(999999999); // true
                Number.isInteger(0.2);       // false
                Number.isInteger(Math.PI);   // false
            // Number.parseFloat()                 Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
                Number.parseFloat('10') // 10
                Number.parseFloat('10.00') // 10
                Number.parseFloat('238,21') // 238
                Number.parseFloat('237.22') // 237.22
                Number.parseFloat('34 56 78') // 34
                Number.parseFloat(' 37 ') // 37
                Number.parseFloat('18 is my age') // 18
            // Number.parseInt()                   Chuyển đổi chuỗi đã cho thành một số nguyên
                Number.parseInt('10') // 10
                Number.parseInt('10.00') // 10
                Number.parseInt('238,21') // 238
                Number.parseInt('237.22') // 237
                Number.parseInt('34 56 78') // 34
                Number.parseInt(' 37 ') // 37
                Number.parseInt('18 is my age') // 18
            // Number.prototype.toFixed()          Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
                var numberObject = 1234.56789;

                numberObject.toFixed(); // '1235'
                numberObject.toFixed(1); // '1234.6'
                numberObject.toFixed(6); // '1234.567890'
            // Number.prototype.toString()         Chuyển đổi và trả về số đã cho dưới dạng chuỗi
                (11).toString();    // '11'
                (18).toString();     // '18'
                (17.3).toString();   // '17.3'
        // Số và làm việc với số
        //     1. Tạo các giá trị number
        //         các cách tạo: có 2 cách
                    var age = 20;
                    var otherNumber = new Number(9);
                // Dùng cách nào? dùng cách 1. Tại sao? đỡ rườm rà
                // Kiểm tra datatype
                    var age = 20;//number
                    var otherNumber = new Number(9);//object
                // Nếu tạo ra số ko họp lệ thì giá trị trả về sẽ là NaN thì ta có hàm kiểm tra giá trị đó có phải NaN ko là
                    var result = 20 / 'ABC'
                    console.log(isNaN(result))
            // 2. Làm việc với number
                //Keyword: Javascrip number methods
                // To string: chuyển đổi number thành String
                    number.toString
                // To Fixed: Muốn làm tròn số thập phân
                    var PI = 3.14
                    PI.toFixed()// nếu ko truyền vào số thì làm tròn hết và kiểu dữ liệu trả về của nó là String