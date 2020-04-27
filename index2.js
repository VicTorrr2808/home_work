// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let age = 28
let strAge = String(age)
typeof strAge
console.log(typeof strAge)

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = 28
let boolAge = Boolean(age)
typeof boolAge
console.log(typeof boolAge)

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = 28
let nullAge = null

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let name = 'Viktor'
let numName = Number(name)
typeof numName
console.log(typeof numStr)

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let name = 'Viktor'
let booName = Boolean(name)
typeof booName
console.log(typeof booName)

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let name = 'Viktor'
let nullName = null

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let green = true;
let strGreen = String(green)
typeof strGreen
console.log(typeof strGreen)

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let green = true;
let numGreen = Number(green)
typeof numGreen
console.log(typeof numGreen)

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let green = true;
let nullGreen = null

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = null
let strAge = String(age)
typeof strAge
console.log(typeof strAge)

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = null
let numAge = Number(age)
typeof numAge
console.log(typeof numAge)

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = null
let booAge = Boolean(age)
typeof booAge
console.log(typeof booAge)

// 13) Напишіть всі способи створення функції.
function myFunction(p1, p2) {
	return p1 * p2;
}

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію
function getName() { }

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію
function getName() { return 'Viktor' }
getName()

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function arg(arg1) {
	return arg1
}
arg()


// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function sum(arg1, arg2) {
	return arg1 + arg2;
}
sum(3, 8)

let a = 3
let b = 8
sum(a, b)


// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function sum(arg1, arg2, arg3) {
	return arg1 + arg2 + arg3;
}
sum(2, 4, 6)

let a = 2
let b = 4
let c = 6
sum(a, b, c)

