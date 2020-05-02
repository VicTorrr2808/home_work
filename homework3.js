// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 1
let y = 2
console.log(x == y)

x = 2
console.log(x == y)


// 2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 2
let y = 2
console.log(x != y)

x = 1
console.log(x != y)

// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 1
let y = '1'
console.log(x === y)
!
	y = 1
console.log(x === y)

// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let b = 0
let c = 0
console.log(b !== c)

c = false
console.log(b !== c)

// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 1
let y = '1'
console.log(x > y)

y = 0
console.log(x > y)

// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 3
let y = '1'
console.log(x <= y)

x = 1
console.log(x <= y)

// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 1
let y = '1'
console.log(x < y)

y = 2
console.log(x < y)

// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x = 1
let y = false
console.log(x <= y)

y = '1'
console.log(x <= y)

// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a = 10
let b = 2
console.log(a === 1 && b === 2)

let a = 1
console.log(a === 1 && b === 2)

// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a = 3
let b = 4
console.log(a === 1 || b === 2)

a = 1
b = 2
console.log(a === 1 || b === 2)

// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
!10
console.log(!10)

!!10
console.log(!!10)

// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"
'My favorite color ' + 'is green'
console.log('My favorite color ' + 'is green')

// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" в іншому "медична"
let color = 'red'
let type = (color == 'red') ? 'fire' : 'med';
console.log(type)

let color = 'green'
let type = (color == 'red') ? 'fire' : 'med';
console.log(type)

// 14)  Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
let obj = { key1: 'aaa', key2: 'bbb' }
delete obj.key2
console.log(obj)

// 15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
let arr = ['aaaa', 'bbbb', 0, true];
delete arr[3]
console.log(arr)

// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in" визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"
let obj = { key1: 'aaa', key2: 'bbb', key3: 'ccc' }
console.log(0 in obj)
console.log('aaa' in obj)

// 17) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"
let obj = ['aaa', 'bbb', 'ccc']
console.log(0 in obj)
console.log(3 in obj)