// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"
let user = 'Victor';
let age = 28;
let surname = 'Zinchenko';

let user = 'Victor', age = 28, surname = 'Zinchenko';

const BIRTHDAY = '18.04.1982'
const PI = 3.14
const APPLE = 'the_best'

var x = 2;
var y = 3;
var sum = x + y;

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let user = 'Victor';
const APPLE = 'the_best'

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

//Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
/*
Lorem incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non.
*/

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let string = 'string'
typeof 'string'
console.log(typeof 'string');

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let number = 23
typeof 23
console.log(typeof 23);

// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let green = true;
let red = false;
typeof true
console.log(typeof true)

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let user1 = {}
let user1 = { name: 'Victor', age: 28, location: 'Ireland' }

object.keys(user1)
typeof { a: 1 }
console.log(typeof user1)


// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let fruits = ['apple', 'banana', 'pineapple'];
typeof fruits
"object"
console.log(fruits)

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
const square = function (number) { return number * number }
undefined
typeof square
"function"
console.log(square)
ƒ(number) { return number * number }

// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let x = 123;
x = undefined
console.log(x)

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let age = null;
undefined
typeof age
"object"
console.log(age)

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.
let user = new Object
let user1 = { name: 'Victor', age: 28, location: 'Ireland', sex: 'male' }
typeof user
"object"
console.log(user)
