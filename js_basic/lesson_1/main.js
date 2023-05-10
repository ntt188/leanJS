// var namem = '1'
// var number = 1

// var full = namem + number

// if (full == '11') {
//     console.log('!!!');
// }else {
//     console.log('???');
// }

// function writeLog(message) {
//     console.log(message)
// }

// writeLog('Test message');

// Argument
// function writeLog() {
//     var myString = '';
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// writeLog('Log1', 'Log2', 'Log3')


// Các loại function
// 1. Declaration function
    function showMessage() {}
// 2. Expression function
    var showMessage2 = function(){}

    setTimeout(function(){

    });

    var myObject = {
        myFunction: function() {}
    }

var number = '20';
console.log(Number.isFinite(number) || Number.isInteger(number))

var arr = [
    'JS',
    'PHP',
    'Python'
]

console.log(arr.length);

var number = {};
// console.log(typeof number);
// if(typeof number === 'number') {
//     console.log(1);
// }else console.log(0);
number.name = 'NAME';
number.age = 18;
console.log(number)