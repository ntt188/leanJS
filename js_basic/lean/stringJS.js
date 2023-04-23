// Làm việc với chuỗi 
//         1. Tạo chuỗi
//             - Các cách tạo chuỗi: có 2 cách
                var fullName = 'Thanh Thang' 
                var fullName = new String('Thanh Thang')
        //     - Nên dùng cách nào? Lý do?
        //         Nên sử dụng cách 1 
        //     - Kiểm tra data type
        // 2. Một số case sử dụng backlash (\n)
        //     Để bỏ dấu nháy ở trong chuỗi vd
                var fullName = 'Thanh Thang la \'Code\''
        // 3. Xem độ dài chuỗi            
            var fullName = 'Thanh Thang'
            console.log(fullName.length)
        // 4. Chú ý độ dài khi viết code
        //     Chỉ nên một dòng 80 ký tự
        //     có thể sử dụng nối chuỗi
                var fullName = 'dfgdsgsdfgsdgsdfgsdfgd'
                                + 'gfdgdfgbsfgrbsbtstbtr'
                                + 'dfgvbtbtrbtbrbrbsdbrts'
                                + 'vdfsgbrsgrtgrtb';
        // 5. Template string ES6
            var firstName = 'Thanh';
            var lastName = 'Thang';

            // thay vì ta in ra bằng cách:
            console.log('Tôi là: '+ firstName + ' ' + lastName);

            // thì ta sử dụng:
            console.log(`Tôi là: ${firstName} ${lastName}`);
        // * Làm việc với chuỗi
        // (Keyword: javascrip string methods)
            // 1. Length: Dộ dài chuỗi
                console.log(myString.length)   
            // 2. Find index: tìm kiếm vị trí chuỗi
                // trả về -1 là ko tìm thấy
                console.log(myString.indexOf('JS'))
                // trả về giá trị lơn hơn hoặc = 0 là có tồn tại
                
                // thêm vị trí bạn muốn tìm kiếm
                console.log(myString.indexOf('JS',7))

                // Tìm kiếm chuỗi JS cuối cùng
                console.log(myString.lastIndexOf('JS'))

                // Có thể thay indexOf bằng Search
            // 3. Cut string: tách chuỗi
                console.log(myString.slice(4,6))
                // muốn căt từ vị trí đến cuối thì vất tham số sau

            // 4. Replace: Ghi đè giá trị
                console.log(myString.replace('JS','Javascrip'))

                // Ghi đè tất cả các chuối JS trong chuỗi
                console.log(myString.replace(/JS/g,'Javascrip'))
            // 5. Convert to upper case: Chuyển đổi thành chữ hoa
                console.log(myString.toUpperCase())
            // 6. Convert to lowẻ case: Chuyển đổi thành chữ thường
                console.log(myString.toLowerCase())
            // 7. Trim: Loại bỏ các ký tự trắng thừa ở đầu và cuối
                console.log(myString.trim())
            // 8. Split: Cắt một chuỗi thành array
                var languages = 'Javascrip, PHP, Ruby';
                console.log(languages.split(', '))
                // thêm điểm chung trong chuổi để cắt
            // 9. Get a character by index: lấy ký tự từ một vị trí cho trước
                console.log(myString.charAt(3))