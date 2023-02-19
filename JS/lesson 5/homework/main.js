// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a,b) => a*b;
// console.log(calc(8,9))


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// let calc = (p,r) => 2*p*r;
// console.log(calc(3.14,8));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc = (p,r,h) => 2*p*r*h;
// console.log(calc(3.14,6,12));



// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let users = (array) => {
//     for (const item of array) {
//         console.log(item)
//
//     }
// }
//
// users([
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// paragraph(`English texts for beginners to practice reading and comprehension online and for free.`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (text) => {
//     document.write(`<div>
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
//     </div>`);
// }
//
// list(`Hello`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (p,i) => {
//         document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${p}</li>`)
//
//     }
//     document.write(`</ul>`);
//
// }
//
// list(`Hello`, 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = (array) => {
//     document.write (`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//        document.write (`<li>${array[i]} </li>`)
//
//     }
//     document.write (`</ul>`)
// }
//
// list (['html', 3, 'javascript', 'mysql', 666, 'react', true, 'node.js'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let list = (array) => {
//     for (const arrayElement of array) {
//         console.log(array)
//     }
// }
//
// list ([
//     {
//         id: 4304903493,
//         name: `Anna`,
//         age: 22
//     },
//     {
//         id: 8888888,
//         name: `Olga`,
//         age: 40
//     },
//     {
//         id: 48393389818273792,
//         name: `Viktoria`,
//         age: 25
//     }
// ])

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [4, 8, 30, 55, 99, 10, 2, 6];
//
//     function minNumber (array){
//     let min = numbers[0];
//     for (const item of numbers) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
//
//     }
//
// console.log(minNumber(numbers))

// let minNumber = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
// }
// console.log(minNumber([4, 8, 30, 55, 99, 10, 2, 6]))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (array) =>{
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum);
//
// }
//
// sum ([4,8,55,99])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// let swap = (arr,index1,index2) => {
//     let h1 = arr[1];
//     let h2 = arr[2];
//     arr[1] = h2;
//     arr[2] = h1;
//
//     return arr
//
// }
//
// console.log(swap ([888,999,666]))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// let exchange = (UAH, currencyValues,exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return UAH / item.value;
//         }
//     }
// }
//
// console.log (exchange(
//     10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42}
//     ],
//     'USD'
//     ));
