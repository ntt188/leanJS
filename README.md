# leanJS
- **JS BASIC**
- **JS ADVANCED**
# JS BASIC
1.  buil-in
2.  toán tử và kiểu dữ liệu
3.  hàm
4.  làm việc với chuỗi
5.  làm việc với số
6.  làm việc với mảng
7.  làm việc với object
8.  lệnh rẽ nhánh, toán tử 3 ngôi
9.  vòng lặp
10. call back
11. DOM
12. JSON, Fetch, postman, promise
13. Thực hành(practice(tabs_UI, music_player))
## Khai báo biến
- Sử dụng từ khóa: var [tên biến] = [giá trị]
- Trong đó: [tên biến] viết thường chữ cái đầu và viết hoa chữ cái đầu của từ tiếp theo
## Comment
- Comment 1 dòng: // (phim tắt nhanh: ctrl + /) 
- Comment nhiều dòng: /*  */  (phim tắt nhanh: /**)
## 1.Built-in:
- Là các hàm đc javascrip xây dựng sẵn ta chỉ cần lấy ra sử dụng một số hàm cơ bản:
    1. Alert: in ra thông báo
    2. Console: in ra dòng thông báo trong tab console "dùng để debug"
    3. Confirm: hộp thoại xác nhận (chẳng hạn đủ tuổi chưa,...)
    4. Prompt: cũng như Confirm những có thêm ô input để nhập dữ liệu
    5. Set timeout: set time để chạy code nằm trong nó
    6. Set interval: cũng như set timeout nhưng nó có tính lặp lại
- Cách dùng:
    1. alert("xin chào")
    2. console.log('Bla bla bkla') "in ra dòng chữ thông báo"
        console.warn() "in ra cảnh báo"
        console.erro() "in ra lỗi"
    3. confirm('Xác nhận bản đủ tưởng')
    4. prompt('Xác nhận bản đủ tưởng')
    5. setTimeout(function () {
            alert('Thông báo')
        }, 1000)
    6. setInterval(function () {
            console.log('Day là log ')
        }, 1000)
# Toán tử và kiểu dữ liệu
- **"lesson_1"**
- **Toán tử trong javascrip:**
    1. Toán tử số học - Arithmetic
        - +, - , *, /, %, ++, --, **
        - trong đó: ** là lũy thừa
    2. Toán tử gán - Assignment
        ```
        Toán tử     Ví dụ       Tưởng đường
        =           x=y         x=y
        +=          x+=y        x = x + y
        -=          x-=y        x = x - y
        *=          x*=y        x = x * y
        /=          x/=y        x = x / y
        **=         x**=y       x = x ** y
        ```
        - vd: var fullName = 'Thanh Thắng';
    3. Toán tử so sánh - Comparison : luôn trả về kiểu boolean
        ```
        ==      -->     Bắng
        !=      -->     Không bằng
        >       -->     Lớn hơn
        <       -->     Nhỏ hơn
        >=      -->     Lớn hơn hoặc băng
        <=      -->     Nhỏ hơn hoặc bằng
        ===     -->     So sánh bằng cả giá trị và kiểu dữ liệu
        !==     -->     So sánh không bằng cả giá trị và kiểu dữ liệu
        ```
    4. Toán tử logic - Logical
        ```
        &&      -       And : chỉ cần một thằng false thì tất cả false
        ||      -       Or  : chỉ cần một thằng true thì tất cả true
        !       -       Not
        ```
    5. Toán tử chuỗi - string operator
        - có thể sử dụng các toán tử gán
        - VD:
            ```js
            var firstName = 'Thanh'
            var lastName = 'Thang'
            // In ra firstName và lastName cùng 1 dòng
            console.log(firstName + ' ' + lastName)
            ```
- **Kiểu dữ liệu**
    1. Kiểu dữ liệu nguyên thủy - primitive data
        ```
                                    Ví dụ
            - number                var a = 2 
            - string                var fullName = 'Thanh Thang' (muốn bỏ dấu '' trong chuỗi thì bot thêm dấu/ vd: 'Thanh /'Thang')
            - boolean               var isSuccess = true
            - undefined             var age
            - null                  var isNull = null (có nghĩa là ko có gì)
            - symbol                var id = Symbol('id')
        ```
    2. Dữ liệu phức tạp - Complex Data
        ```
                                    Ví dụ
            - function              var myFunction = function() {
                                        alert('Chào các bạn');
                                    }
                                    myFunction();
            - object                
                object              var myObject = {
                                        name: 'Thanh Thang',
                                        age: 24,
                                        adress: 'Quang Tri'
                                    };
                array               var myArray = [
                                        'javascrip',
                                        'PHP',
                                        'Ruby'
                                    ];
        ```
        - dùng typeof để kiểm tra kiểu dữ liệu
            ```
            vd: var a = 5
                console.log(typeof a) 
                "giá trị in ra là number"
            ```
- **Câu lệnh điều kiện if-else**
    - Có 6 giá trị khi bỏ vào câu lệnh if thì đc biết conver qua kiểu dự liệu boolean là false còn lại là true:
        - 0
        - false
        - '' hoặc ""
        - undefined
        - NaN
        - null
- **Làm việc với hàm (function)**
    1. Hàm ?
        - Một khối mã
        - làm 1 việc cụ thể
    2. Loại hàm
        - Built-in
        - Tự định nghĩa
    3. Tính chất
        - Không thực thi khi định nghĩa
        - Sẽ thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    4. Tạo hàm đầu tiên:
        - tên hàm có thể chứa a-z và A-Z 0-9 _ $ (Lưu ý số ko được dặt đầu tên biến)
        - Định nghĩa:
            ```
            function showDialog() {
                //code
            }
            ```
        - Gọi hàm:
            showDialog();
        
    5. Tham số trong hàm:
        1. Tham số
            - Định nghĩa
            - Kiểu dữ liệu: Không giới hạn kiểu dữ liệu
            - Tính private: Biến sử dụng trong function thì chỉ sử dụng trong function
            - 1 tham số
            - Nhiều tham số
        2. Truyền tham số
            - 1 tham số
            - Nhiều tham số
        3. Arguments
            - Đối tượng arguments
            - Giới thiệu vòng for of
            là đối tượng khi hàm ko có tham số truyền vào nhưng khi gọi hàm ta lại truyền tham số cho nó 
            thì arguments sẽ nhận các giá trị đó.
            - VD:
                ```js
                function writeLog() {
                    var myString = '';
                    for (var param of arguments){
                        myString += `${param} - `
                    }
                    console.log(myString)
                }

                writeLog('Log1', 'Log2', 'Log3')
                ```
    6. trả về trong function
        - Dùng return trong hàm
    7. Một số điều cần biết về Hàm  
        1. Khi function đặt trùng tên: Thì function định nghĩa sau ghi đè function trước nên chỉ sử dụng đc function sau
        2. Khai báo biến trong Hàm: Có thể khai báo biến trong hàm nhưng biến này chỉ sử dụng trong function vì có tính private
        3. Định nghĩa hàm trong hàm: Có thể những khi khai báo trong function thì chỉ được Gọi nó trong function đó
    8. Cái loại function
        1. Declaration function: có thể gọi ở trước function
            ```js
            function showMessage() {}
            ```
        2. Expression function: ko thể gọi trước định nghĩa
            ```js
            var showMessage2 = function(){}

            setTimeout(function(){

            });

            var myObject = {
            myFunction: function() {}
            }
            ```
        3. Arrow function(Học ở khóa nâng cao)
- **Làm việc với chuỗi** 
    1. Tạo chuỗi
        - Các cách tạo chuỗi: có 2 cách
            ```js
            var fullName = 'Thanh Thang' 
            var fullName = new String('Thanh Thang')
            ```
        - Nên dùng cách nào? Lý do?
            - Nên sử dụng cách 1 
        - Kiểm tra data type
    2. Một số case sử dụng backlash (\n)
        - Để bỏ dấu nháy ở trong chuỗi vd
            ```js
            var fullName = 'Thanh Thang la \'Code\''
            ```
    3. Xem độ dài chuỗi
        ```js
        var fullName = 'Thanh Thang'
        console.log(fullName.length)
        ```
    4. Chú ý độ dài khi viết code
        - Chỉ nên một dòng 80 ký tự
        - có thể sử dụng nối chuỗi
            ```js
            var fullName = 'dfgdsgsdfgsdgsdfgsdfgd'
                            + 'gfdgdfgbsfgrbsbtstbtr'
                            + 'dfgvbtbtrbtbrbrbsdbrts'
                            + 'vdfsgbrsgrtgrtb';\
            ```
    5. Template string ES6
        ```js
        var firstName = 'Thanh';
        var lastName = 'Thang';

        // thay vì ta in ra bằng cách:
        console.log('Tôi là: '+ firstName + ' ' + lastName);

        // thì ta sử dụng:
        console.log(`Tôi là: ${firstName} ${lastName}`);
        ```
    * Làm việc với chuỗi
    (Keyword: javascrip string methods)
    1. Length: Dộ dài chuỗi
        ```js
        console.log(myString.length)   
        ```
    2. Find index: tìm kiếm vị trí chuỗi
        ```js
        // trả về -1 là ko tìm thấy
        console.log(myString.indexOf('JS'))
        // trả về giá trị lơn hơn hoặc = 0 là có tồn tại
        
        // thêm vị trí bạn muốn tìm kiếm
        console.log(myString.indexOf('JS',7))

        // Tìm kiếm chuỗi JS cuối cùng
        console.log(myString.lastIndexOf('JS'))

        // Có thể thay indexOf bằng Search
        ```
    3. Cut string: tách chuỗi
        ```js
        console.log(myString.slice(4,6))
        // muốn căt từ vị trí đến cuối thì vất tham số sau
        ```

    4. Replace: Ghi đè giá trị
        ```js
        console.log(myString.replace('JS','Javascrip'))

        // Ghi đè tất cả các chuối JS trong chuỗi
        console.log(myString.replace(/JS/g,'Javascrip'))
        ```
    5. Convert to upper case: Chuyển đổi thành chữ hoa
        ```js
        console.log(myString.toUpperCase())
        ```
    6. Convert to lowẻ case: Chuyển đổi thành chữ thường
        ```js
        console.log(myString.toLowerCase())
        ```
    7. Trim: Loại bỏ các ký tự trắng thừa ở đầu và cuối
        ```js
        console.log(myString.trim())
        ```
    8. Split: Cắt một chuỗi thành array
        ```js
        var languages = 'Javascrip, PHP, Ruby';
        console.log(languages.split(', '))
        // thêm điểm chung trong chuổi để cắt
        ```
    9. Get a character by index: lấy ký tự từ một vị trí cho trước
        ```js
        console.log(myString.charAt(3))
        ```