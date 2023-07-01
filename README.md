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
    4. Prompt: cũng như Confirm những có thêm ô input để nhập dữ liêuj
    5. Set timeout: set time để chạy code nằm trong nó
    6. Set interval: cũng như set timeout nhưng nó có tính lặp lại
- Cách dùng:
    2. console.log('Bla bla bkla') "in ra dòng chữ thông báo"
        - console.warn() "in ra cảnh báo"
        - console.erro() "in ra lỗi"
    3. confirm('Xác nhận bản đủ tưởng')
    4. prompt('Xác nhận bản đủ tưởng')
    5. setTimeout(function () {alert('Thông báo')}, 1000)
    6. setInterval(function () {console.log('Day là log ')}, 1000)