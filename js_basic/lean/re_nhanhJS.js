// Lệnh rẽ nhánh và toán tử 3 ngôi
        // Lệnh rẽ nhánh If else
        // Lệnh rẽ nhánh switch
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
        // Toán tử 3 ngôi
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