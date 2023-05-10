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


        // Làm việc với mảng - part 2
        /*    
            Array method
                forEach(): duyệt qua từng phần tử của mảng                    
                every(): kiểm tra tất cả các phần tử thỏa mãn cái gì đó
                some(): kiểm tra xem có phần tử nào trong mãn thỏa mãn ko
                find(): tìm kiếm phần tử đầu tiên thõa mãn
                filter(): cũng như find nhưng nó tìm hết tất cả các phần tử thõa mãn
                map(): Khi muốn chỉnh sửa thay đổi 1 array
                reduce(): Muốn nhận về 1 giá trị duy nhất sau khi tính toán
        */
        var courses = [
            {
                id: 1,
                name: 'Javascrip',
                coin: 250
            },
            {
                id: 2,
                name: 'HTML, CSS',
                coin: 0
            },
            {
                id: 3,
                name: 'Ruby',
                coin: 0
            },
            {
                id: 4,
                name: 'PHP',
                coin: 400
            },
            {
                id: 5,
                name: 'ReactJS',
                coin: 500
            },
            {
                id: 6,
                name: 'Ruby',
                coin: 0
            }
        ]
        courses.forEach(function(course, index) {
            console.log(index, course);
        })

        var isFree = courses.every(function(course, index) {
            return course.coin === 0;
        })
        console.log(isFree);// chỉ cần 1 phần tử có giá trị false thì trả về false

        var isFree = courses.some(function(course, index) {
            return course.coin === 0;
        })
        console.log(isFree);// chỉ cần 1 phần tử có giá trị true thì trả về true

        var course = courses.find(function(course, index) {
            return course.name === 'Ruby';
        })
        console.log(course);// tìm xem có phần tử nào thỏa mãn nếu có thì trả về giá trị đó còn ko thì undefined
        
        var listCourse = courses.filter(function(course, index) {
            return course.name === 'Ruby';
        })
        console.log(listCourse);// tìm xem có các phần tử nào thỏa mãn nếu có thì trả về tất cả các giá trị đó còn ko thì undefined
    
        function courseHandler(course) {
            return {
                id: course.id,
                name: `Khóa học: ${course.name}`,
                coin: course.coin,
                coinText: `Giá: ${course.coin}`
            }
        }
        var newCourses = courses.map(courseHandler);
        //map này trả về array 
        //function trả về giá trị nào thì mảng mới nhận giá trị đó
        // nếu ko truyền giá trị nào vào thì các giá trị mảng đó đều nhận undefined
        // có thể truyền thêm param key vào function và nó trả về key
            /*
                function courseHandler(course, index) {
                    return {
                        id: course.id,
                        name: `Khóa học: ${course.name}`,
                        coin: course.coin,
                        coinText: `Giá: ${course.coin}`,
                        index: index
                    }
                }
            */
        // và cũng trả về thêm một param đó là originArray là giá trị của chính courses

        //Tổng số coin
        //Nếu ko dùng reduce thì ta dùng vòng lặp
            /*
                var totalCoin = 0;
                for(var course of courses) {
                    totalCoin += course.coin;
                }
                console.log(totalCoin);
            */
        //khi dùng reduce
            function coinHandler(accumulator, currentValue) {
                return accumulator + currentValue.coin;
            }
            var totalCoin = courses.reduce(coinHandler, 0);
            //Làm phẳng mảng
                var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
                var flatArray = depthArray.reduce(function(flatOutput, depthItem){
                    return flatOutput.concat(depthItem);
                },[]);
                console.log(flatArray);
            //Lấy ra các khóa học đưa vào một mảng mới
                var topics = [
                    {
                        topic: "Front-end",
                        courses: [
                            {
                                id: 1,
                                title: "HTML, CSS"
                            },
                            {
                                id: 2,
                                title: "Javascrip"
                            }
                        ]
                    },
                    {
                        topic: "Back-end",
                        courses: [
                            {
                                id: 1,
                                title: "PHP"
                            },
                            {
                                id: 2,
                                title: "NodeJS"
                            }
                        ]
                    }
                ];
                var newCourses = topics.reduce(function (courses, topic) {
                    return courses.concat(topic.courses);
                }, []);
                console.log(newCourses);
                var htmls = newCourses.map(function(course){
                    return `
                        <div>
                            <h2>${course.title}</h2>
                            <p>ID: ${course.id}</p>
                        </div>
                    `;
                });
                console.log(htmls.join(''));