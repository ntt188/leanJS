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
## "lesson_1"
## Toán tử trong javascrip:
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
## Kiểu dữ liệu
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
## Câu lệnh điều kiện if-else
- Có 6 giá trị khi bỏ vào câu lệnh if thì đc biết conver qua kiểu dự liệu boolean là false còn lại là true:
    - 0
    - false
    - '' hoặc ""
    - undefined
    - NaN
    - null
## Làm việc với hàm (function)
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
## Làm việc với chuỗi
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
* **Làm việc với chuỗi**
**(Keyword: javascrip string methods)**
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
## Làm việc với số
* **Kiểu dữ liệu số**
    ```js
    Number.isFiite()                //Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
        Number.isFinite(2 / 0); // false
        Number.isFinite(20 / 5); // true
        Number.isFinite(0 / 0); // false
    Number.isInteger()               //Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
        Number.isInteger(999999999); // true
        Number.isInteger(0.2);       // false
        Number.isInteger(Math.PI);   // false
    Number.parseFloat()              //Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
        Number.parseFloat('10') // 10
        Number.parseFloat('10.00') // 10
        Number.parseFloat('238,21') // 238
        Number.parseFloat('237.22') // 237.22
        Number.parseFloat('34 56 78') // 34
        Number.parseFloat(' 37 ') // 37
        Number.parseFloat('18 is my age') // 18
    Number.parseInt()                  //Chuyển đổi chuỗi đã cho thành một số nguyên
        Number.parseInt('10') // 10
        Number.parseInt('10.00') // 10
        Number.parseInt('238,21') // 238
        Number.parseInt('237.22') // 237
        Number.parseInt('34 56 78') // 34
        Number.parseInt(' 37 ') // 37
        Number.parseInt('18 is my age') // 18
    Number.prototype.toFixed()         //Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
        var numberObject = 1234.56789;

        numberObject.toFixed(); // '1235'
        numberObject.toFixed(1); // '1234.6'
        numberObject.toFixed(6); // '1234.567890'
    Number.prototype.toString()        //Chuyển đổi và trả về số đã cho dưới dạng chuỗi
        (11).toString();    // '11'
        (18).toString();     // '18'
        (17.3).toString();   // '17.3'
    ```
* **Số và làm việc với số**
    1. Tạo các giá trị number
        - các cách tạo: có 2 cách
            ```js
            var age = 20;
            var otherNumber = new Number(9);
            ```
        - Dùng cách nào? dùng cách 1. Tại sao? đỡ rườm rà
        - Kiểm tra datatype
            ```js
            var age = 20;//number
            var otherNumber = new Number(9);//object
            ```
        - Nếu tạo ra số ko họp lệ thì giá trị trả về sẽ là NaN thì ta có hàm kiểm tra giá trị đó có phải NaN ko là
            ```js
            var result = 20 / 'ABC'
            console.log(isNaN(result))
            ```
    2. Làm việc với number
        ```js
        //Keyword: Javascrip number methods
        //To string: chuyển đổi number thành String
            number.toString
        //To Fixed: Muốn làm tròn số thập phân
            var PI = 3.14
            PI.toFixed()// nếu ko truyền vào số thì làm tròn hết và kiểu dữ liệu trả về của nó là String
        ```
## Làm việc với mảng
* **Mảng (array)**
    1. Tạo mảng
        - Cách tạo
            ```js
            var languages = [
                'javascrip',
                'PHP',
                'Ruby',
            ];
            console.log(languages)

            Kiểm tra có phải array 
                Array.isArray([mảng])
            ```
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra data type?
    2. Truy xuất mảng
        ```js
        //Độ dài mảng 
            languages.length
        //Lấy phần tử theo index    
            languages[2]
        ```
* **Làm việc với mảng** (Keyword: javascrip array methods)
    ```js
    var languages = [
            'Javascrip',
            'PHP',
            'Ruby'
        ]
    var languages2 = [
            'Dart',
            'Ruby'
        ]
    ```
1. To string: chuyển thành string
    ```js
    languages.toString()
    ```
2. Join: thành một chuỗi như toString
    ```js
    languages.join()
    // Nhưng vs join có thể thay thế dấu nối bằng cách truyền pram trong join
    languages.join(' - ')
    ```
3. Pop: xóa phần tử cuối Mảng và trả về phần tử đã xóa
    ```js
    languages.pop()
    ```
4. Push: Thêm phần tử ở cuối Mảng và trả về giá trị độ dài mảng mới
    ```js
    languages.push('Dart') 
    // có thể thêm nhiều phần tử
    languages.push('Dart','Java') 
    ```
5. Shift: ngược lại với Pop là xóa ở đầu và trả về phần tử đã xóa
    ```js
    languages.shift()
    ```
6. UnShift: ngược lại vs push là thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới
    ```js
    languages.unShift('Dart')
    ```
7. Splicing: Xóa hoặc cắt hoặc chèn
    ```js
    // Xóa
        languages.splice(1,1) //xóa từ vị trí số 1 xóa 1 phần tử
    // Chèn 
        languages.splice(1,0,'Dart') //từ vị trí 1 ko xóa vị trí nào và thêm 'Dart' vào vị trí 1
    ```
8. Concat: Nối được array
    ```js
    languages.concat(languages2)
    ```
9. Slicing: Căt lấy 1 vài element
    ```js
    languages.slice(1, 2)//Cắt từ vị trí 1 đến vị trí 2
    ```
* **Làm việc với mảng - part 2**
- Array method
    - forEach(): duyệt qua từng phần tử của mảng                    
    - every(): kiểm tra tất cả các phần tử thỏa mãn cái gì đó
    - some(): kiểm tra xem có phần tử nào trong mãn thỏa mãn ko
    - find(): tìm kiếm phần tử đầu tiên thõa mãn
    - filter(): cũng như find nhưng nó tìm hết tất cả các phần tử thõa mãn
    - map(): Khi muốn chỉnh sửa thay đổi 1 array
    - reduce(): Muốn nhận về 1 giá trị duy nhất sau khi tính toán
```js
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
```
## Làm việc object
    ```js
    var myInfo = {
                name: 'Thanh Thang',        //gồm key và giá trị nếu muốn key có kiểu full-name thì thêm dấu 'full-name'
                age: 24,
                address: 'Dong Ha, Quang Tri'
            };
    ```
- Thêm key và values
    ```js
    myInfo.email = 'nguyenthanhthang999@gmail.com'
    nếu đặt key vi phạm nguyên tắc đặt tên thì:
        myInfo['my-email'] = 'nguyenthanhthang999@gmail.com'
    ```
- Lấy values ra ngoài
    ```js
    myInfo.name hoặc myInfo['name']
    ```
- Tạo một key mới bằng 1 biến
    ```js
    var emailKey = 'email';

    var myInfo = {
        name: 'Thanh Thang',
        age: 24,
        address: 'Dong Ha, Quang Tri',
        [emailKey]: 'nguyenthanhthang999@gmail.com'
    };
    ```
- Xóa đi một cặp Key values
    ```js
    delete myInfo.age
    ```
- Tạo một hàm (function) trong object 
    ```js
    var myInfo = {
        name: 'Thanh Thang',
        age: 24,
        address: 'Dong Ha, Quang Tri',
        emailKey: 'nguyenthanhthang999@gmail.com'
        getName: function() {
            return this.name; //this ở đây là myInfo
        }
    };

    // function --> phương thức  /  method
    // Others --> thuộc tính   /   property

    console.log(myInfo.getName()) //vì getName là 1 function nên ta phải thêm () để nó thực thi
    ```
* **Object constructor** // xây dụng đối tượng
    ```js
    function User(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function() {
            return `${this.firstName} ${this.lastName}`; //this trong function này là getName
        }
    }

    var author = new User('Thanh', 'Thang', 'Avatar');
    var user = new User('Vu', 'Nguyen', 'Avatar');

    author.title = 'chia sẻ niềm vui';
    user.comment = 'liệu có học được nhiều đến đâu';\

    console.log(author);
    console.log(user);

    console.log(author.getName());
    console.log(user.getName());
    ```
* **Object prototype - Basic**
    1. Prototype là gi?
        - là thành phần cấu tạo nên đối tượng được thêm ở ngoài đối tượng
        - Cách tạo:
            ```js
            User.prototype.className = 'F8';
            User.prototype.getClassName = function() {
                return this.className;
            }
            ```
    2. Sử dụng khi nào?
        - khi khởi tạo đối tượng truyền dữ liệu thì dùng Object constructor còn nếu thêm thược tính từ bên ngoài thì Object prototype
        ```js
        console.log(author.className);
        console.log(user.getClassName);
        ```
* **Đối tượng Date** 
    ```js
    var date = new Date();

    lấy dữ liệu
        var year = date.getFullYear();
        var month = date.getMonth() + 1; //riêng vs month thì phải công thêm 1 vì giá trị trả về của getMonth là 0-11
        var day = date.getDate();
    ```
    
    - ***(!!!search javascrip date object mozilla)***
* **Math object**
    ```js
    Math.PI //Số Pi = 3.14...
    Math.round() //Làm tròn số vd 1.3 = 1
    Math.abs()  //Số tuyệt đối (biến số âm thành dương)
    Math.ceil()  //Làm tròn trên VD: 1.3 = 2
    Math.floor() //Làm tròn dưới VD: 1.8 = 1
    Math.ramdom() //random số thập phân nhỏ hơn 1
        var random = Math.floor(Math.random() * 100);
        
        if(random < 50) {
            console.log('Cường hóa thành công')
        }
    Math.min()  //Con số nhỏ nhất
        console.log(Math.min(-100, 1, 30, 200))
    Math.max()  //Con số lớn nhất
    ```
## Lệnh rẽ nhánh và toán tử 3 ngôi
* **Lệnh rẽ nhánh If else**
* **Lệnh rẽ nhánh switch**
    ```js
    var date = 2;
    switch(date) {
        case 2:
            console.log('hôm nay là thứ 2');
        case 3:
            console.log('hôm nay là thứ 3');
        case 4:
            console.log('hôm nay là thứ 4');
        case 5:
            console.log('hôm nay là thứ 5');
        default:
            console.log('khong biet');
    }
    ```
* **Toán tử 3 ngôi**
    ```js
    var course = {
        name: 'javascrip',
        coin: 250
    }

    //Nếu ta kiểm tra bình thường
    if(course.coin > 0){
        console.log(`${course.coin} Coin`);
    }else {
        console.log('Miễn phí');
    }

    //Nêu ta dùng toán tử 3 ngôi
    var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';
    console.log(result);
    ```

## Vòng lặp
1. for - Lặp với điều kiện đúng
    ```js
    for(var i = 1; i <= 10 ; i++){
        console.log(i);
    }
    ```
2. for/in - Lặp với key của dối tượng
    ```js
    var myInfo = {
        name: 'Thang',
        age: 24,
        address: 'QT'
    }
    //in ra key của myInfo
    for(var key in myInfo){
        console.log(key);
    }
    //in ra value của myInfo
    for(var key in myInfo){
        console.log(myInfo[key]);
    }
    ```
3. for/of - Lặp qua values của dối tượng
    ```js
    var languages = [
        'Javascrip',
        'PHP',
        'Java'
    ]
    for(var value of languages) {
        console.log(value);
    }
    ```

    * **Dùng với object**
        ```js
        var myInfo = {
            name: 'Thang',
            age: 24
        }
        //dùng Object.keys(myInfo) để lấy ra mảng chứa key của myInfo
        //hoặc dùng Object.values(myInfo) để lấy ra mảng chứa value của myInfo
        for (var value of Object.keys(myInfo)) {
            console.log(myInfo[value]);
        }
        ```
4. while - Lặp khi điều kiện đúng
    ```js
    var i = 1;
    while (i<= 1000) {
        console.log(i);
        i++;
    }
    ```
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
    ```js
    var i = 0
    var isSuccess = false
    do {
        i++;
        console.log(i);
    } while(i<10)

    //Kiểm tra nạp thẻ thành công
    do{
        i++;
        console.log('Nạp thẻ lần ' + i);

        //Thành công
        If(true){
            isSuccess = true;
        }
    } while(!isSuccess && i < 3);
    ```
* **Break và Continue trong vòng Lặp**
    - break muốn thoát vòng lặp còn continue là bỏ qua 1 vài lần lặp
    ```js
    for(var i=0; i<10; i++){
        if(i%2 !== 0) {
            continue;
        }
        
        console.log(i);

        //if(i >= 5){
        //    break;
        //}
    }
    ```
* **Vòng lặp lồng nhau**
    ```js
    var myArray = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    for(var i = 0; i < myArray.length; i++){
        for(var j = 0; j < myArray[i].length; j++){
            console.log(myArray[i][j]);
        }
    }
    ```
* **Đệ quy là gì? Học về đệ quy!**
    - Đề bài xóa các phần tử trùng lặp trong mảng mà ko dùng hàm có sẵn
    ```js
    var array = ['a','b','c','a','b','c'];
    //Nếu dùng hàm có sẵn
    //Ta có thể dùng (new Set([truyền các giá trị vào có thể mảng hoặc các giá trị]))
    //    vd: console.log(new Set([1,3,2,2,1,3,4,2,3,4]))
    console.log(new Set(array));
    //nhưng điều kiện trả về phải là mảng nên ta phải dùng toán tử của ES6
    console.log([...(new Set(array))]);

    //Để làm đệ quy
        1. Xác định điểm Dùng
        2. Logic handle => Tạo ra điểm dừng

        VD: Bài toán tạo hàm đếm ngược
            function countDown(num) {
                if(num > 0) {
                    console.log(num);
                    return countDown(num-1);
                }

                return num;
            }

            countDown(10);
    ```
# Callback
* **Phần 1**
    - Là hàm(function) được truyền qua một đối số khi gọi hàm khác:
        1. Là hàm
        2. Được truyền qua 1 đối số
    ```js
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
    ```
* **Phần 2**
    - Là hàm
    - Truyền qua đối số
    - Được gọi lại (trong hàm nhận đối số)
    - Tạo hàm map
        ```js
        Array.prototype.myMap = function(cb) {
            var output = [], lengthArr = this.length;

            for (var i = 0; i < lengthArr; i++){
                var tam = cb(this[i], i);
                output.push(tam);
            }

            return output;
        }

        // Expected results
        const numbers = [1, 2, 3];

        console.log(numbers.myMap(function (number) {
            return number * 2;
        })) 
        // Output: [2, 4, 6]

        console.log(numbers.myMap(function (number, index) {
            return number * index;
        })) 
        // Output: [0, 2, 6]
        ```
    - Tạo phương thức myEvery như every
        ```js
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

        // const numbers = [1, 3, 3, 5];

        // console.log(numbers.myEvery(function (number) {
        //     return number % 2 !== 0;
        // })); // Output: true

        // console.log(numbers.myEvery(function (number, index) {
        //     return index % 2 === 0;
        // })); // Output: false

        // console.log(numbers.myEvery(function (number, index, array) {
        //     return array.length % 2 === 0;
        // })); // Output: true
        ```
# HTML DOM
## Document Object Model
    - Có 3 thành phần chính:
        1. Element: các thẻ trong HTML
        2. Attribute: các thuộc tính trong thẻ
        3. Text: các value trong thẻ
    1. Element: ID, class, Tag, CSS selector, HTML collection
        ```js
        document.getElementById(''); //Trả về một element
        document.getElementsByClassName(''); //Trả về số nhiều HTMLColection
        document.getElementsByTagName(''); //Trả về số nhiều HTMLColection
        document.querySelector(''); //Trả về một element
        document.querySelectorAll(''); //Trả về số nhiều NodeList
        ```
    2. Attribute: Thêm, sửa, xóa
        - Có 2 cách: truy suất trực tiếp qua element hoặc qua hàm (setAttribute và getAttribute)
        ```js
        var headingElement = document.querySelector('h1');
        //Với truy xuất trực tiếp thì chỉ truy xuất đc các Attribute thuộc element đó
        headingElement.title = 'Title Text';
        console.log(headingElement.title);
        //Với hàm thì ta có thể thêm các thuộc tính khác ngoài của element đó
        headingElement.setAttribute('data-1','data một');
        console.log(headingElement.getAttribute('data-1'));
        ```
    3. Text: innerText, textContent
        - innerText: trả về giá trị giống trên trình duyệt
        - textContent: trả về giá trị nguyên bản mà code làm ra
        ```js
        var headingElement = document.querySelector('h1');

        //Lấy ra
            console.log(headingElement.innerText);
            //hoặc
            console.log(headingElement.textContent);
        //sửa
            headingElement.innerText = "Heading Text";
            headingElement.textContent = "Heading Text";
        ```
## Node properties
## DOM CSS
- cách xem các thuocj tính getter và setter để lấy ra các values của css inline
    ```js
    var boxElement = document.querySelector('.box');
    console.log(boxElement.style);// xem các thuộc tính
    //Lưu ý: chỉ lấy dữ liệu của inline và phải lấy ra đc element node ms dùng đc
    //set dũ liệu
        boxElement.style.width = '200px';
        boxElement.style.height = '200px';
        boxElement.style.backgroudColor = 'red';
        //cách viết ngắn gọn
            Object.assign(boxElement.style, {
                width : '200px',
                height : '200px',
                backgroudColor : 'green',
            });
    //get dữ liệu
        console.log(boxElement.style.backgroudColor);
    ```
## ClassList property
- phải lấy ra element node mới dùng được
- Dùng để quản lý các class của element
- add: thêm class vào element
- contains: kiểm tra xem 1 class có nằm trong element hay ko
- remove: xóa class khỏi element
- toggle: thêm hoặc xóa class cho element
    ```js
    //Xem các class trong element
        var boxElement = document.querySelector('.box');
        console.log(boxElement.classList);
    //add
        boxElement.classList.add('red')
        //hoặc thêm nhiều class boxElement.classList.add('red','blu');
    //contains
        console.log(boxElement.classList.contains('red'));
    //remove
        boxElement.classList.remove('red');
    //toggle
        setTimeout(() => {
            boxElement.classList.toggle('red');
        }, 3000);
    ```
## DOM events
* **Đọc các event trên w3 (search: dom event w3)**
1. Attribute events
    - viết thẳng sự kiện vào thẻ và thêm 'on' vào đầu và viết js vào trong dấu ""
    - VD: 
        <h1 onClick = 'console.log(Math.ramdom())'></h1>
2. Assign event using the element node
    ```js
    var h1Element = document.querySelector('h1');
    h1Element.onClick = function() {
        console.log(Math.ramdom());
    }
    ```
* **Các thẻ**
    ```js
    <input type="text">
    <input type="checkbox">
    <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    ```
    1. Input /select
        ```js
        //Input/select
        //text
        var inputElement = document.querySelector('input[type="text"]');
        //Thực thi sau khi hết target vào nó
        inputElement.onchange = function(e) {
            console.log(e.target.value);
        }
        //Thực thi cùng lúc hành động
        inputElement.oninput = function(e) {
            console.log(e.target.value);
        }

        //checkbox
        var inputElement = document.querySelector('input[type="checkbox"]');
        inputElement.onchange = function(e) {
            console.log(e.target.checked);
        }

        //select
        var inputElement = document.querySelector('select');
        inputElement.onchange = function(e) {
            console.log(e.target.value);//trả về giá trị trong thuộc tính chứ ko phải giá trị nhìn thấy
        }
        ```
    2. Key up / down
        ```js
        //key up/down
        var inputElement = document.querySelector('input[type="text"]');
        inputElement.onkeyup = function(e) {
            console.log(e.which);//lấy ra phím đang bấm

            switch(e.which) {
                case 27:
                    console.log('Exit');
                    break;
            }
        }
        ```
1. preventDefault: Loại bỏ hành vi mặc định của trình duyệt trên một thẻ html
2. stopPropagation: loại bỏ sự kiện nổi bọt
    - trong đó: nỗi bọt là khi tác động vào con thì sự kiện ở cha cũng đc thực thi
## Event listener
* Nếu bạn xử lý 1 event những ko muốn xóa event đó và xử lý không nhiều thao tác thì dùng dom event còn nếu bạn xử lý thêm và xóa event và trong event đó xử lý quá nhiều sự kiện thì dùng event listener
- file html
    ```html
    <button id="btn">Click me!</button>
    ```
1. Xử lý nhiều việc khi 1 event xảy ra
2. Lắng nghe / Hủy bỏ lắng nghe
    ```js
    var btn = document.getElementById('btn');
    //xử lý vs dom event
        btn.onClick = function() {
            //Việc 1
            console.log('Viec 1');

            //Việc 2
            console.log('Viec 1');

            //Việc 3
            alert('Viec 1');
        }
    //xử lý với event listener
        function viec1() {
            console.log('Viec 1');
        }
        function viec2() {
            console.log('Viec 2');
        }
        btn.addEventListener('click',viec1);
        btn.addEventListener('click',viec2);
        //xóa một event chẳng hạn event1 sau 3s
        setTimeout(function() {
            btn.removeEventListener('click',viec1);
        },3000);
    ```
# JSON, Promise, Fetch, Postman
## JSON
1. Là 1 định dạng dữ liệu (chuỗi)
2. JavaScrip Object Notation
3. JSON: Number, Boolean, Null, Array, Object

* Mã hóa / Giải mã
* Encode / Decode
* Stringify: từ javascrip types -> json
* Parse: từ json -> javascrip types
    ```js
    //var json = '["javascrip","PHP"]';
    var json = '{"name":"Thanh Thang","age":24}';

    //chuyển từ json sang javascrip
    console.log(JSON.parse(json));
    //chuyển từ javascrip sang json
    console.log(JSON.stringify({
        name: 'Thanh Thang',
        age: 16
    }));
    ```
## Promise
* Sync(Đồng bộ)
* Async(Bất đồng bộ)
* Nỗi đau
* Lý thuyết, cách hoạt động
* Thực hành, ví dụ
### Sync / Async
    ```js
    //Khi in ra theo thứ tự code từ trên xuống là đông bộ
    console.log(1);
    console.log(2);

    //Những với trường hợp này là bất đồng bộ(Async )
    //Viết trước chưa chắc xong trước
    //Những hàm bất dồng bộ trong trong javascrip: setTimeout, setInterval, fetch, XMLHttpRequest,
    //file reading, request animation frame

    //javascrip có thuật ngữ Callback để xử lý bất đồng bộ

    setTimeout(function(){
        console.log(1);
    },1000);
    console.log(2);

    ```
* Promise (pain):Nỗi đau
    - Callback hell
    - Pyramid of doom
### lý thuyết, cách hoạt động
* là một object constructor đối tượng Promise, truyền vào param là 1 function và function đó đc gọi là Executor là function sẽ đc thực thi khi gọi tới đối tượng Promise và function này luôn được gọi trước cả giả trị được gán. Và Executor này đều trả về 2 tham số(param) là 2 function resolve(thành công) và reject(thất bại)
* **Các bước:**
    1. new Promise
    2. Executor
* **promise có 3 trạng thái**
    1. pending
    2. fulfilled
    3. rejected
    ```js
    var promise = new Promise(
            //Executor
            function(resolve, reject) {
                //Logic
                //Thành công: resolve()
                //Thất bại: reject()
                resolve
            }
        );
    ```
* **và nó trả về 3 phương thức thường sử dụng**
    ```js
    promise
        .then(function() {

        })
        .catch(function() {

        })
        .finally(function() {

        });
    ```
#### Lý thuyết chính:
* Promise là khái niệm sinh ra để xử lý bất đồng bộ. Trước khi có promise thì ta phải xử lý Callback và call bách xảy ra vấn đề là Callback hell nó sẻ bị sâu vào khó nhìn khó hiểu. Nên thằng promise được sinh ra ở bản javascrip mới hơn trong phiên bản es6. và chúng ta có thể dùng để khắc phục Callback hell để giúp chúng ta viết code đỡ sâu và dễ hiểu hơn. Để tạo ra promise thì ta dùng từ khóa new Promise và trong constructor ta truyền vào một Executor function trong Executor function nhận đc 2 tham số 1 là resolve(gọi khi thành công) 2 là reject(gọi khi thất bại) khi sử dụng promise thì đối tượng promise được tạo ra chúng ta sẽ sử dụng qua phương thức .then() Khi promise được resolve và .catch() khi promise được reject.

* Promise làm theo tuần tự string là từ trên xuống
- VD: nêu phương thức then() trước trả về(return) về một giá trị nào đó thì then() sau nó nhận được chính tham số trả về đó và thực thi liền then() sau. còn nếu then() trước trả về(return) một promise mới thì then() sau phải chờ then() trước thực thi xong ms được thực thi.
    ```js
    promise
        .then(function() {
            return new Promise(function(resolve){
                setTimeout(function() {
                    resolve([1,2,3]);
                }, 3000);
            })
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {

        })
        .finally(function() {

        });
    ```
    - Áp dụng vào bài toán cứ sau 1s thì in ra lân lượt 1, 2, 3, ...
        ```js
        function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms)
            });
        }

        sleep(1000)
            .then(function() {
                console.log(1);
                return sleep(1000);
            })
            .then(function() {
                console.log(2);
                return sleep(1000);
            })
            .then(function() {
                console.log(3);
                return sleep(1000);
            })
        ```
    
### promise methods(resolve,reject,all)
- bắt lỗi reject được hiểu đơn giản là khi một promise bị reject thì các then() bị ngắt không đc thực thi.
- VD:
    ```js
    sleep(1000)
        .then(function() {
            console.log(1);
            return sleep(1000);
        })
        .then(function() {
            console.log(2);
            return new Promise(function(resolve,reject){
                reject("có lỗi");
            });
        })
        .then(function() {
            console.log(3);
            return sleep(1000);
        })
        .catch(function(err){
            console.log(err);
        }) ;
    ```
- theo vd trên thì khi in ra 1 và 2 thì gặp lỗi thì sẽ bỏ qua việc in 3 mà nhảy xuống phương thức catch() và trả về lỗi.
1. Promise.resolve: chỉ dùng khi bạn chắc chắn promise chỉ trả về resolve
    ```js
    var promiseResolve = Promise.resolve('Success');
    promiseResolve
        .then(function(result) {
            console.log('result: ', result);
        })
        .catch(function(err) {
            console.log('Error: ', err);
        });
    ```
- 100% chỉ thực thi .then(), .catch() chỉ thực thi khi trong .then() trả về một promise reject
2. Promise.reject: chỉ dùng khi bạn chắc chắn promise chỉ trả về reject
    ```js
    var promiseReject = Promise.reject('Error');
    promiseReject
        .then(function(result) {
            console.log('result: ', result);
        })
        .catch(function(err) {
            console.log('Error: ', err);
        });
    ```
- 100% chỉ thực thi .catch()
3. Promise.all: dùng khi bạn muốn 2 hoặc nhiều promise chạy cùng lúc ko cần đợi promise khác chạy xong mới thực thi đỡ phải mất thêm time chờ đợi.
- VD:
    ```js
    var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        },2000);
    }
    );
    var promise2 = new Promise(
        function(resolve) {
            setTimeout(function() {
                resolve([2, 3]);
            },2000);
        }
    );
    Promise.all([promise1,promise2])
        .then(function(result) {
            var result1 = result[0];
            var result2 = result[1];
            console.log(result1.concat(result2));
        });
    ```
- thì chỉ mất 5s để chạy 2 tiến trình thay vì mất đến 7s nếu làm từng cái một
### promise example
- bài toán xử lý trong phần comment một bài viết
    ```js
    var users = [
        {
            id: 1,
            name: "Thanh Thang"
        },
        {
            id: 2,
            name: "Son Dang"
        },
        {
            id: 3,
            name: "Thanh Thua"
        }
    ];

    var comments = [
        {
            id: 1,
            user_id: 1,
            content: "ra video di"
        },
        {
            id: 2,
            user_id: 2,
            content: "ra roi ra roi"
        }
    ];

    //1. lấy comment
    //2. từ comment lấy ra user_id,
    //từ user_id lấy ra user tương ứng

    //fake AIP (mô phỏng hàm thực hiện gọi qua thằng back-end trả về dừ liệu)
    function getComments() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(comments);
            },1000);
        });
    }

    function getUsersByIds(userIds) {
        return new Promise((resolve) {
            var result = users.filter((user) => {
                return userIds.includes(user.id)
            });
            setTimeout(() => {
                resolve(resolve);
            },1000);
        });
    }

    getComments()
        .then((comments) => {
            var userIds = comments.map((comment) => {
                return comment.user_id;
            });

            return getUsersByIds(userIds)
                    .then((users) => {
                        return {
                            users: users,
                            comments: comments
                        };
                    });
        })
        .then((data){
            var commentBlock = document.getElementById('comment-block');

            var html = '';
            data.comments.forEach((comment) => {
                var user = data.users.find((user) {
                    return user.id === comment.user_id;
                });
                html += '<li>${user.name}: ${comment.content}</li>';
            });

            commentBlock.innerHTML = html;
        });
    ```
- Tạo 1 thẻ ul trong file html để nhận các giá trị
    ```html
        <ul id="comment-block"></ul>
    ```
## Fetch
* Dùng để gọi API từ lưu trữ back-end để trình chiếu lên Front-end
* API(url) -> application programing interface (Cổng giao tiếp các phần mềm)

* Back-end -> API(URL) -> Fetch -> JSON/XML -> JSON.parse -> javascrip types -> render ra giao diện với HTML
### cách sử dụng
    ```js
    var postAPI='https://jsonplaceholder.typicode.com/posts';
    fetch(postAPI)
        .then((response) => {
            return response.json();
            //hàm này thực hiện JSON.parse: JSON ->javascrip types
        })
        .then((posts) {
            //console.log(posts);
            //xử lý hiển thị lên giao diện
            //đầu tiên tạp ra một mảng mới chứa thêm các thẻ html
            var htmls = posts.map((post) => {
                return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>
                `;
            });

            //khi có mảng mới ta chuyển mảng đó thành một chuỗi ko ngăn cách
            var html = htmls.join('');
            document.getElementById('post-block').innerHTML = html;
        });
    ```
- Tạo một thẻ ul có id post-block
    ```html
    <ul id="post-block"></ul>
    ```
### JSON server: fake api server / MOCK API
* coi tại link
* https://fullstack.edu.vn/learning/javascript-co-ban?id=5d91ae2c-f665-4b2c-8c8e-11d7f9a6eac9
* khởi động api fake dùng "npm start"
### CRUD
- creat: Tạo mới       -> POST 
- read: Lấy dữ liệu    -> GET 
- Update: Chỉnh sửa    -> PUT / PATCH
- Delete: Xóa          -> DELETE
* **search cách sử dụng fetch tùy trường hợp CRUD: fetch w3, fetch mozilla**
## Postman
* Sử dụng Postman làm việc với REST API
* Postman mô phỏng và test fake api cho trình duyệt
    - https://fullstack.edu.vn/learning/javascript-co-ban?id=61546753-d397-43ef-b948-ec7f3b3fd880
# ECMAScrip 6+
1. **let, const**
2. **Template Literals**
3. **Multi-line String**
4. **Arrow function**
5. **Classes**
6. **Enhanced object literals**
7. **Default parameter value**
8. **Destructuring**
9. **Rest parameters**
10. **Spread**
11. **Tagged Template literal**
12. **Modules**
13. **Optional chaining (?.)**

1. **let, const**
    1. Var / let, const: Scope, Hosting
    2. Const / var, let: Assignment

    - Code block: if else, loop, {}, ...
    - var có thể gọi bên trong scope và bên ngoài scope nhưng let và const chỉ gọi bên trong scope
    - var hỗ trợ hosting những 2 thằng kia ko hỗ trợ

    - const ko thể gán lại được nhưng thuộc tính của nó thì có thể

    - code thuần: Var
    - babel: let, const
        - Khi định nghĩa biến và không gán lại biến đó: Const
        - Khi cần gán lại cho biến: Let
        ```js
        if (true) {
            var course = 'javascrip'
        }
        ```
2. **Template Literals**
    ```js
    const courseName = 'Javascrip';
    const courseName2 = 'PHP';
    // nếu  ko dùng es6:const description = 'course name: ' + courseName;
    // ES6: 
        const description = `course name: ${courseName} ${courseName2}`;
        //nếu muốn thêm ký tự đặc biệt bên trong thì thêm dấu \ trước ký tự đặc biệt
    ```
3. **Multi-line String**
    ```js
    //ko dùng
    const lines = 'Line 1\nLine 2';
    const.log(lines);
    //có dùng
    const lines = `Line 1
    Line 2
    Line 3`;
    const.log(lines);
    ```
4. **Arrow function**
    ```js
    //ko dùng
    const sum = function(a,b) {
        return a + b;
    }
    //có dùng
    const sum = (a,b) => a + b;
    //ko thể dùng là constructor function
    ```
5. **Classes**
    ```js
    //đơn giản là cách viết khác của constructor function
    /*
        function Course(name, price) {
            this.name = name;
            this.price = price;

            this.getName = () => this.name;
        }
    */

    class Course {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }

        getName() {
            return this.name;
        }

        getPrice() {
            return this.price;
        }

        run() {
            const isSuccess = false;

            if(...) {
                isSuccess = true;
            }
        }
    }

    const course = new Course()
    ```
6. **Enhanced object literals**
    1. Định nghĩa key: value cho object
    2. Định nghĩa method cho object
    3. Định nghĩa key cho object dưới dạng biến
    ```js
    var name = 'JavaScrip';
    var price = 1000;

    /*
        var course = {
            name: name,
            price: price,
            getName: function() {
                return name;
            }
        }
    */
    //ES6
        var course = {
            name,
            price,
            getName() {
                return name;
            }
        }
    
    var fieldName = 'name';
    var fieldPrice = 'price';

    const course = {
        [fieldName]: 'javascrip',
        [fieldPrice]: 1000
    }
    ```
7. **Default parameter value**
    ```js
    //khi ko truyền giá trị(param) thì chúng ta phải tạo giá trị mặc định cho hàm
    /*
        function logger(log) {
            if(typeof log === 'undefined') {
                log = 'giá trị mặc định';
            }
            console.log(log);
        }
        logger(undefined);
    */
    //Với ES6
        function logger(log = 'giá trị mặc định') {
            console.log(log);
        }
        logger(undefined);
    ```
8. **Destructuring**
    ```js
    //Phân rã

    var array = ['javascrip', 'PHP', 'Ruby'];

    /*
        var a = array[0];
        var b = array[1];
        var c = array[2];
    */
    //ES6
        var [a,b,c] = array;

        console.log(a,b,c);

        var course = {
            name: 'javascrip',
            price: 1000,
            img: 'image-address',
            children: {
                name: 'ReactJS'
            }
        }

        var {name: parentName, children: {name}} = course;
        console.log(parentName);
        console.log(name);
    ```
9. **Rest parameters**
    ```js
    //cũng như 8 nhưng lấy ra những thằng con lại
    var [a, ...rest] = array;

    console.log(a);
    console.log(rest);

    var {name, ...rest} = course;
    console.log(rest);

    //ta cũng có thể tạo hàm truyền nhiều tham số  cùng kiểu bằng rest
    function logger(...param){

    }
    ```
10. **Spread**
    ```js
    //Nối thêm dữ liệu khác vs rest là lấy các phần từ còn lậy thì Spread
    //Chẳng hạn như nối mảng hay object
    //VD:
        var arr1 = ['java', 'PHP'];
        var arr2 = ['C', 'javascrip', 'python'];
        var arr3 = [...arr1, ...arr]
        console.log(arr3);

        var obj1 = {
            name: 'javascrip'
        }
        var obj2 = {
            price: 1000;
        }
        var obj3 = {
            ...obj1,
            ...obj2
        }

        var array = ['javascrip', 'PHP', 'Ruby'];

        function logger(...rest) //đây là rest
        { 
            for(var i = 0; i < rest.length; i++) {
                Console.log(rest[i]);
            }
        }

        logger(...array) //Đây là Spread
    ```
11. **Tagged Template literal**
    ```js
    function highlight(...rest) {
        console.log(rest);
    }
    var brand = 'f8';
    var course = 'javascrip';
    highlight `Học lập trình ${course} tại ${brand}!`;
    ```
12. **Modules**
- Import/ Export
- tại thẻ script thêm type = 'modul'thì ms dùng đc
- mỗi Modules chỉ có một export default nhưng lại có thể có nhiều export thường và export sẽ được nhận lại bằng Destructuring
    - Nếu ta import bằng 
        ```js
        import logger from './logger.js';
        ```
    thì là ta đang import của export default

    - Nếu ta import bằng Destructuring
        ```js
        import {
            TYPE_LOG,
            TYPE_WARN,
            TYPE_ERROR
        } from './constants.js';
        ```
    thì là ta đang import của export thường
*/
13. **Optional chaining (?.)**
- dùng để check khi ko chắc chắn 1 cái key nào đó có tồn tại hay ko

## Babel
# Polyfill