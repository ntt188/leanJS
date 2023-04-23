// Làm việc với mảng
//         Mảng (array)
//             1. Tạo mảng
//                 Cách tạo
                    var languages = [
                        'javascrip',
                        'PHP',
                        'Ruby',
                    ];
                    console.log(languages)

                    // Kiểm tra có phải array 
                        Array.isArray([mảng])
                // Sử dụng cách nào? Tại sao?
                // Kiểm tra data type?
            // 2. Truy xuất mảng
            //     Độ dài mảng 
                    languages.length
                // Lấy phần tử theo index    
                    languages[2]
        // Làm việc với mảng
        //Keyword: javascrip array methods
            var languages = [
                    'Javascrip',
                    'PHP',
                    'Ruby'
                ]
            var languages2 = [
                    'Dart',
                    'Ruby'
                ]
            // 1. To string: chuyển thành string
                languages.toString()
            // 2. Join: thành một chuỗi như toString
                languages.join()
                // Nhưng vs join có thể thay thế dấu nối bằng cách truyền pram trong join
                languages.join(' - ')
            // 3. Pop: xóa phần tử cuối Mảng và trả về phần tử đã xóa
                languages.pop()
            // 4. Push: Thêm phần tử ở cuối Mảng và trả về giá trị độ dài mảng mới
                languages.push('Dart') 
                // có thể thêm nhiều phần tử
                languages.push('Dart','Java') 
            // 5. Shift: ngược lại với Pop là xóa ở đầu và trả về phần tử đã xóa
                languages.shift()
            // 6. UnShift: ngược lại vs push là thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới
                languages.unShift('Dart')
            // 7. Splicing: Xóa hoặc cắt hoặc chèn
                Xóa
                    languages.splice(1,1) //xóa từ vị trí số 1 xóa 1 phần tử
                Chèn 
                    languages.splice(1,0,'Dart') //từ vị trí 1 ko xóa vị trí nào và thêm 'Dart' vào vị trí 1
            // 8. Concat: Nối được array
                languages.concat(languages2)
            // 9. Slicing: Căt lấy 1 vài element
                languages.slice(1, 2)//Cắt từ vị trí 1 đến vị trí 2