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
- Toán tử trong javascrip:
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
- Kiểu dữ liệu
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