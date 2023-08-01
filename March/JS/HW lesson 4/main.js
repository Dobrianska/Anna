// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b) {
//     let result = a*b;
//     return result;
// };
// let x = calc (10,20);
// console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc (p, r){
//     return p*r*r;
// };
//
// let x = calc (3.14, 2)
// console.log(x);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(p,r,h) {
//     return 2*p*r*h;
// };
//
// let x = s(3.14, 2, 6);
// console.log(x);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function fooiter(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// fooiter([1,5,10,`anna`,true,`lviv`]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function x(content) {
//     document.write(`<p>${content}</p>`)
// }
//
// x(`Lorem ipsum dolor sit amet.`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function xxx(content) {
//     document.write(`<ul>`);
//         document.write(`<li>${content}</li>`);
//         document.write(`<li>${content}</li>`);
//         document.write(`<li>${content}</li>`);
//         document.write(`</ul>`);
// }
//
// xxx(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function xxx(content, a) {
//     document.write(`<ul>`);
//     for (let i = 0; i < a; i++) {
//         const contentElement = content[i];
//         document.write(`<li>${content}</li>`);
//     }
//         document.write(`</ul>`);
// }
//
// xxx(`hello`, 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function fooiter(array) {
//         document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//         document.write(`</ul>`);
// }
//
// fooiter([1,5,10,`anna`,true,`lviv`]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function users(array) {
//     for (const arrayElement of array) {
//         document.write(`<div> id: ${arrayElement.id}, name: ${arrayElement.name}, age: ${arrayElement.age} </div>`)
//     }
// };
// arr = [
//     {id: 0393838, name: `Anna`, age: 23},
// {id:83748374, name: `Dima`, age:27},
// {id:3462424, name: `Vika`, age:33}
// ];
// users(arr);

// - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [5, 32, 55, 48, 23, 12];
// function minNumber (array) {
//     let min = numbers[0];
//     for (const item of numbers) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
//     }
//
// console.log(minNumber(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let result = 0;
//     for (const number of arr) {
//         result += number;
//     }
//     return result;
// }
//
// let numbers = [5, 32, 55, 12, 1];
// console.log(sum(numbers))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap (arr, index1, index2) {
//     const value1 = arr[index1];
//     const value2 = arr[index2];
//     arr[index1] = value2;
//     arr [index2] = value1;
//     return arr;
// }
//
// console.log(swap([11,22,33,44],0,1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//
//     }
// }
//
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))