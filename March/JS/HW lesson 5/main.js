// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a,b) => a*b;
// console.log(calc(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (p, r) => p*r*r;
// console.log(calc(3.14, 2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc = (p,r,h) => 2*p*r*h;
// console.log(calc (3.14, 2, 8));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let fooiter = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// fooiter([1,5,10,`anna`,true,`lviv`]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let content = (text) => {
//     document.write(`${text}`);
// }
//
// content(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (text) => {
//     document.write (`<ul>`)
//         document.write (`<li>${text}</li>`)
//         document.write (`<li>${text}</li>`)
//         document.write (`<li>${text}</li>`)
//     document.write (`</ul>`)
// }
//
// list(`hi`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (text, i) => {
//     document.write (`<ul>`)
//     for (let j = 0; j < i; j++) {
//         const textElement = text[j];
//         document.write (`<li>${text}</li>`)
//     }
//     document.write (`</ul>`)
// }
//
// list(`hi`, 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let fooiter = (array) => {
//     document.write (`<ul>`)
//     for (const arrayElement of array) {
//         document.write (`<li>${arrayElement}</li>`)
//     }
//     document.write (`</ul>`)
// }
//
// fooiter([1,5,10,`anna`,true,`lviv`]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let list = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div> id- ${arrayElement.id}, name - ${arrayElement.name}, age - ${arrayElement.age}</div>`);
//     }
// }
//
// arr = [
//     {id: 0393838, name: `Anna`, age: 23},
// {id:83748374, name: `Dima`, age:27},
// {id:3462424, name: `Vika`, age:33}
// ];
// list(arr);


// - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [5, 32, 55, 48, 23, 12];
// let minNumber = (array) => {
// let min = numbers[0];
//     for (const item of numbers) {
//         if (min > item) {
//             min = item;
//         }
//     }
//     return min
//
//     }
//
// console.log(minNumber(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let result = 0;
//     for (const number of arr) {
//         result += number;
//     }
//     return result;
// }
//
// console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     const value1 = arr[index1];
//     const value2 = arr[index2];
//     arr[index1] = value2;
//     arr[index2] = value1;
//     return arr;
// }
//
// console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//
//     }
//
// }
//
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))