// Làm việc với hàm (function)
//         1. Hàm ?
//             - Một khối mã
//             - làm 1 việc cụ thể
//         2. Loại hàm
//             - Built-in
//             - Tự định nghĩa
//         3. Tính chất
//             - Không thực thi khi định nghĩa
//             - Sẽ thực thi khi được gọi
//             - Có thể nhận tham số
//             - Có thể trả về 1 giá trị
//         4. Tạo hàm đầu tiên
//             tên hàm có thể chứa a-z và A-Z 0-9 _ $ (Lưu ý số ko được dặt đầu tên biến)
//             Định nghĩa:
                function showDialog() {
                    //code
                }
            // Gọi hàm:
                showDialog();
            
        // 5. Tham số trong hàm
        //     1. Tham số
        //         - Định nghĩa
        //         - Kiểu dữ liệu: Không giới hạn kiểu dữ liệu
        //         - Tính private: Biến sử dụng trong function thì chỉ sử dụng trong function
        //         - 1 tham số
        //         - Nhiều tham số
        //     2. Truyền tham số
        //         - 1 tham số
        //         - Nhiều tham số
        //     3. Arguments
        //         - Đối tượng arguments
        //         - Giới thiệu vòng for of
        //         là đối tượng khi hàm ko có tham số truyền vào nhưng khi gọi hàm ta lại truyền tham số cho nó 
        //         thì arguments sẽ nhận các giá trị đó.

        //         VD:
                    function writeLog() {
                        var myString = '';
                        for (var param of arguments){
                            myString += `${param} - `
                        }
                        console.log(myString)
                    }

                    writeLog('Log1', 'Log2', 'Log3')
        // 6. trả về trong function
        //     Dùng return trong hàm
        // 7. Một số điều cần biết về Hàm  
        //     1. Khi function đặt trùng tên: Thì function định nghĩa sau
        //                                    ghi đè function trước nên chỉ sử dụng đc function sau
        //     2. Khai báo biến trong Hàm: Có thể khai báo biến trong hàm nhưng biến này chỉ sử dụng
        //                                 trong function vì có tính private
        //     3. Định nghĩa hàm trong hàm: Có thể những khi khai báo trong function thì chỉ được Gọi
        //                                  nó trong function đó
        // 8. Cái loại function
        //     1. Declaration function: có thể gọi ở trước function
                function showMessage() {}
            // 2. Expression function: ko thể gọi trước định nghĩa
                var showMessage2 = function(){}

                setTimeout(function(){

                });

                var myObject = {
                myFunction: function() {}
                }
            // 3. Arrow function(Học ở khóa nâng cao)