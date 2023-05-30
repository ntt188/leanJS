//HTML DOM
    //Document Object Model
    //3 thành phần chính
    //1. Element: các thẻ trong HTML
    //2. Attribute: các thuộc tính trong thẻ
    //3. Text: các value trong thẻ


    //1. Element: ID, class, Tag, CSS selector, HTML collection
        document.getElementById(''); //Trả về một element
        document.getElementsByClassName(''); //Trả về số nhiều HTMLColection
        document.getElementsByTagName(''); //Trả về số nhiều HTMLColection
        document.querySelector(''); //Trả về một element
        document.querySelectorAll(''); //Trả về số nhiều NodeList
    //2. Attribute: Thêm, sửa, xóa
        //Có 2 cách: truy suất trực tiếp qua element hoặc qua hàm (setAttribute và getAttribute)
        var headingElement = document.querySelector('h1');
        //Với truy xuất trực tiếp thì chỉ truy xuất đc các Attribute thuộc element đó
            headingElement.title = 'Title Text';
            console.log(headingElement.title);
        //Với hàm thì ta có thể thêm các thuộc tính khác ngoài của element đó
            headingElement.setAttribute('data-1','data một');
            console.log(headingElement.getAttribute('data-1'));
    //3. Text: innerText, textContent
        //innerText: trả về giá trị giống trên trình duyệt
        //textContent: trả về giá trị nguyên bản mà code làm ra
        var headingElement = document.querySelector('h1');

        //Lấy ra
            console.log(headingElement.innerText);
            //hoặc
            console.log(headingElement.textContent);
        //sửa
            headingElement.innerText = "Heading Text";
            headingElement.textContent = "Heading Text";
    //Node properties
        
    //DOM CSS
        //cách xem các thuocj tính getter và setter để lấy ra các values của css inline
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
    //ClassList property
        //phải lấy ra element node mới dùng được
        //Dùng để quản lý các class của element
        //add: thêm class vào element
        //contains: kiểm tra xem 1 class có nằm trong element hay ko
        //remove: xóa class khỏi element
        //toggle: thêm hoặc xóa class cho element

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
    //DOM events
    //Đọc các event trên w3 (search: dom event w3)
    //1. Attribute events
        //viết thẳng sự kiện vào thẻ và thêm 'on' vào đầu và viết js vào trong dấu ""
        //VD: <h1 onClick = 'console.log(Math.ramdom())'></h1>
    //2. Assign event using the element node
        var h1Element = document.querySelector('h1');
        h1Element.onClick = function() {
            console.log(Math.ramdom());
        }

    //Các thẻ
    /*
        <input type="text">
        <input type="checkbox">
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    */
    //1. Input /select
    //2. Key up / down

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
    
    //1. preventDefault: Loại bỏ hành vi mặc định của trình duyệt trên một thẻ html
    //2. stopPropagation: loại bỏ sự kiện nổi bọt
    //trong đó: nỗi bọt là khi tác động vào con thì sự kiện ở cha cũng đc thực thi

    //Event listener
    //Nếu bạn xử lý 1 event những ko muốn xóa event đó và xử lý không nhiều thao tác thì dùng dom event
    //còn nếu bạn xử lý thêm và xóa event và trong event đó xử lý quá nhiều sự kiện thì dùng event listener
    //file html
    //<button id="btn">Click me!</button>
    //1. Xử lý nhiều việc khi 1 event xảy ra
    //2. Lắng nghe / Hủy bỏ lắng nghe
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