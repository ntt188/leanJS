// var listCoursesBlock = document.querySelector("#list-courses");

var courseAPI = 'http://localhost:3000/courses';


function start() {
    getCourses(function(courses){
        renderCourses(courses);
    });

    handleCreateForm();
}

//khi chạy ứng dụng thì chạy thằng start đầu tiên
start();

// ================================================== //
//functions
    //call API
//lấy dữ liệu
function getCourses(callBack){
    fetch(courseAPI) 
        .then(function(response) {
            return response.json();
        })
        .then(callBack);
}
//tạo mới dữ liệu
function createCourse(data, callBack) {
    var option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, 
        body: JSON.stringify(data)
    }
    fetch(courseAPI, option)
        .then(function(response){
            response.json();
        })
        .then(callBack);
}
//xóa dữ liệu
function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    fetch(courseAPI + '/' + id, option)
        .then(function(response){
            response.json();
        })
        .then(function() {
            getCourses(function(courses){
                renderCourses(courses);
            });
        });
}


    //xử lý 
//render HTML và đẩy ra html
function renderCourses(courses){
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(function(course){
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.desciption}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

//create
function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var desciption = document.querySelector('input[name="desciption"]').value;

        var formData = {
            name: name,
            desciption: desciption
        }
        createCourse(formData,getCourses(function(courses){
            renderCourses(courses);
        }));
    }
}