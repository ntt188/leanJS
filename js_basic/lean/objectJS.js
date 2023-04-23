// Làm việc object
        var myInfo = {
            name: 'Thanh Thang',        //gồm key và giá trị nếu muốn key có kiểu full-name thì thêm dấu 'full-name'
            age: 24,
            address: 'Dong Ha, Quang Tri'
        };

        // Thêm key và values
            myInfo.email = 'nguyenthanhthang999@gmail.com'
            // nếu đặt key vi phạm nguyên tắc đặt tên thì:
                myInfo['my-email'] = 'nguyenthanhthang999@gmail.com'

        // Lấy values ra ngoài
            myInfo.name 
            // hoặc 
            myInfo['name']

        // Tạo một key mới bằng 1 biến
            var emailKey = 'email';

            var myInfo = {
                name: 'Thanh Thang',
                age: 24,
                address: 'Dong Ha, Quang Tri',
                [emailKey]: 'nguyenthanhthang999@gmail.com'
            };
        // Xóa đi một cặp Key values
            delete myInfo.age
        // Tạo một hàm (function) trong object 
            var myInfo = {
                name: 'Thanh Thang',
                age: 24,
                address: 'Dong Ha, Quang Tri',
                emailKey: 'nguyenthanhthang999@gmail.com',
                getName: function() {
                    return this.name; //this ở đây là myInfo
                }
            };

            // function --> phương thức  /  method
            // Others --> thuộc tính   /   property

            console.log(myInfo.getName()) //vì getName là 1 function nên ta phải thêm () để nó thực thi
        // Object constructor // xây dụng đối tượng

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
            user.comment = 'liệu có học được nhiều đến đâu';

            console.log(author);
            console.log(user);

            console.log(author.getName());
            console.log(user.getName());
        // Object prototype - Basic
            // 1. Prototype là gi?
                // là thành phần cấu tạo nên đối tượng được thêm ở ngoài đối tượng
                // Cách tạo:
                    User.prototype.className = 'F8';
                    User.prototype.getClassName = function() {
                        return this.className;
                    }
            // 2. Sử dụng khi nào?
                // khi khởi tạo đối tượng truyền dữ liệu thì dùng Object constructor còn nếu thêm thược tính từ bên ngoài thì Object prototype
            console.log(author.className);
            console.log(user.getClassName);
        // Đối tượng Date 
            var date = new Date();

            // lấy dữ liệu
                var year = date.getFullYear();
                var month = date.getMonth() + 1; //riêng vs month thì phải công thêm 1 vì giá trị trả về của getMonth là 0-11
                var day = date.getDate();
            
            // !!!search javascrip date object mozilla
        // Math object
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