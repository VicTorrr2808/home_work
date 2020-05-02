// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let user = 'Victor';
const age = '28'

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки
/* 
//Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
/*
Lorem incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non.
*/

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"

let fruits = ['Apple', 'Orange', 'Plum', 'Pineapple', 'Cherry'];
console.log(fruits)
delete arr[0]
delete arr[4]
console.log(arr)

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"
let obj = { key1: 'aaa', key2: 'bbb', key3: 'ccc', key4: 'ddd', key5: 'eee' }
console.log(obj)

delete obj.key1
delete obj.key5
console.log(obj)

// 5) Напишіть всі способи створення функції.
function myFunction(p1, p2) {
	return p1 * p2;
}



// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function sum(arg1, arg2, arg3) {
	return arg1 + arg2 + arg3;
}
sum(2, 4, 6)

let a = 2
let b = 4
let c = 6
sum(a, b, c)


// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"
let workType = 1000
let salary = (workType == fulltime) ? '1000' : '500';
console.log(type)

let workType = 500
let salary = (workType == fulltime) ? '1000' : '500';
console.log(type)



// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади