// Vòng lặp
        // 1. for - Lặp với điều kiện đúng
            for(var i = 1; i <= 10 ; i++){
                console.log(i);
            }
        // 2. for/in - Lặp với key của dối tượng
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
        // 3. for/of - Lặp qua values của dối tượng
            var languages = [
                'Javascrip',
                'PHP',
                'Java'
            ]
            for(var value of languages) {
                console.log(value);
            }

            // Dùng với object
                var myInfo = {
                    name: 'Thang',
                    age: 24
                }

                //dùng Object.keys(myInfo) để lấy ra mảng chứa key của myInfo
                //hoặc dùng Object.values(myInfo) để lấy ra mảng chứa value của myInfo
                for (var value of Object.keys(myInfo)) {
                    console.log(myInfo[value]);
                }
        // 4. while - Lặp khi điều kiện đúng
            var i = 1;
            while (i<= 1000) {
                console.log(i);
                i++;
            }
        // 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
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
                if (true) {
                    isSuccess = true;
                }
            } while(!isSuccess && i < 3);
        // Break và Continue trong vòng Lặp
            // break muốn thoát vòng lặp còn continue là bỏ qua 1 vài lần lặp
            for(var i=0; i<10; i++){
                if(i%2 !== 0) {
                    continue;
                }
                
                console.log(i);

                //if(i >= 5){
                //    break;
                //}
            }
        
        // Vòng lặp lồng nhau
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
        // ** Đệ quy là gì? Học về đệ quy!
            // Đề bài xóa các phần tử trùng lặp trong mảng mà ko dùng hàm có sẵn

            var array = ['a','b','c','a','b','c'];
            //Nếu dùng hàm có sẵn
            //Ta có thể dùng (new Set([truyền các giá trị vào có thể mảng hoặc các giá trị]))
            //    vd: console.log(new Set([1,3,2,2,1,3,4,2,3,4]))
            console.log(new Set(array));
            //nhưng điều kiện trả về phải là mảng nên ta phải dùng toán tử của ES6
            console.log([...(new Set(array))]);

            //Để làm đệ quy
                // 1. Xác định điểm Dùng
                // 2. Logic handle => Tạo ra điểm dừng

                // VD: Bài toán tạo hàm đếm ngược
                    function countDown(num) {
                        if(num > 0) {
                            console.log(num);
                            return countDown(num-1);
                        }

                        return num;
                    }

                    countDown(10);