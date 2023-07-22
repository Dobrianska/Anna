// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [1, true, 3, 'Anna', 55, false, 'Lviv', 828292, 'Ukraine', 454]
// console.log (arr[0])
// console.log (arr[1])
// console.log (arr[2])
// console.log (arr[3])
// console.log (arr[4])
// console.log (arr[5])
// console.log (arr[6])
// console.log (arr[7])
// console.log (arr[8])
// console.log (arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'Everything I Never Told You',
//     pageCount: 320,
//     genre: 'novel'
// }
//
// console.log(book1)
//
// let book2 = {
//     title: 'Conversations with Friends',
//     pageCount: 328,
//     genre: 'novel'
// }
//
// console.log(book2)
//
// let book3 = {
//     title: 'Normal People',
//     pageCount: 272,
//     genre: 'novel'
// }
//
// console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 = {
//     title: 'Everything I Never Told You',
//     pageCount: 320,
//     genre: 'novel',
//     authors: [
//         {name: 'Celeste Ng', age: 42},
//     ],
// };
//
// console.log(book1)
//
// let book2 = {
//     title: 'Conversations with Friends',
//     pageCount: 328,
//     genre: 'novel',
//     authors: [
//         {name: 'Sally Rooney', age: 32},
//     ],
// };
//
// console.log(book2)
//
// let book3 = {
//     title: 'Normal People',
//     pageCount: 272,
//     genre: 'novel',
//     authors: [
//         {name: 'Sally Rooney', age: 32},
//     ],
// };
//
// console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {name: 'Anna', username: 'XXX',password: 23493849 },
//     {name: 'Misha', username: 'Misha',password: 293039 },
//     {name: 'Dima', username: 'Dima0323',password: 00000 },
//     {name: 'Inna', username: 'Inna000',password: 22311123 },
//     {name: 'Ira', username: 'mrs.ira',password: 343555 },
//     {name: 'Sasha', username: 'sasha1222',password: 'vsv12212' },
//     {name: 'Mary', username: 'maryyyyy',password: '23422ccsc' },
//     {name: 'Ivan', username: 'Vanya',password: 3434322 },
//     {name: 'George', username: 'YYYYY',password: 777777 },
//     {name: 'Emma', username: 'Emma333',password: 'emma0000' },
// ];
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = -3;
// if (x !== 0) {
//     console.log('Вірно')
//     }else{
//     console.log('Невірно')
// };


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = 50;
// if (time >= 0 && time <15) {
//     console.log('перша')
// }else if (time >= 15 && time < 30) {
//     console.log('друга')
// }else if (time >= 30 && time < 45) {
//     console.log('третя')
// }else if (time >= 45 && time < 60) {
//     console.log('четверта')
// }else{ console.error('???')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 15;
// if (day >= 1 && day <10) {
//     console.log('перша')
// }else if (day >= 10 && day < 20) {
//     console.log('друга')
// }else if (day >= 20 && day < 31) {
//     console.log('третя')
// }else{ console.error('???')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = 0;
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('???')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = 35;
// let y = 6;
// if (x>y) {
//     console.log(x)
// }else if (y>x) {
//     console.log(y)
// }else if(x=y) {
//     console.log('числа рівні')
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = 77;
// if (x === ' ' || x === 0 || x === undefined || x === null) {
//     x = 'default';
// }
// console.log(x)


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// // let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер!')
// }
//
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер!')
// }
//
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер!')
// }
//
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер!')
// }
//
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер!')
// }
//
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер!')
// }