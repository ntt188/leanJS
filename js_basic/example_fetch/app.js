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
async function getCourses(callBack){
    await fetch(courseAPI) 
        .then(function(response) {
            return response.json();
        })
        .then(callBack);
}
//tạo mới dữ liệu
async function createCourse(data) {
    var option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, 
        body: JSON.stringify(data)
    }
    await fetch(courseAPI, option)
        .then(function(response){
            response.json();
        })
        .then(function() {
            getCourses(function(courses){
                renderCourses(courses);
            });
        });
}
//xóa dữ liệu
async function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    await fetch(courseAPI + '/' + id, option)
        .then(function(response){
            response.json();
        })
        .then(function() {
            getCourses(function(courses){
                renderCourses(courses);
            });
        });
}
// Cập nhật dữ liệu
async function updateCourse(id, data) {
    var option = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, 
        body: JSON.stringify(data)
    }
    await fetch(courseAPI + '/' + id, option)
        .then(function(response){
            response.json();
        })
        .then(function() {
            var divBtn = document.getElementById('save').parentElement;
            getCourses(function(courses){
                renderCourses(courses);
            });            
            divBtn.innerHTML = `
                <button id="create">Create</button>
            `;
            handleCreateForm();
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
                <button onclick="getUpdate(${course.id},'${course.name}','${course.desciption}')">Cập nhật</button>
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
        createCourse(formData);
    }
}

//update
function getUpdate(index,nameValue,desciptionValue) {
    var name = document.querySelector('input[name="name"]');
    var desciption = document.querySelector('input[name="desciption"]');

    name.value = nameValue;
    desciption.value =desciptionValue;

    var btnCreat = document.getElementById('create');
    var divBtn = btnCreat.parentElement;

    divBtn.innerHTML = `
        <button id="save")">Save</button>
    `;
    //onclick="handleUpdateForm(${index}
    handleUpdateForm(index);
}

function handleUpdateForm(id) {
    var saveBtn = document.querySelector('#save');

    saveBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var desciption = document.querySelector('input[name="desciption"]').value;

        var formData = {
            name: name,
            desciption: desciption
        }
        updateCourse(id, formData);
    }
}