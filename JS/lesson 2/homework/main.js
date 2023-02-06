// Масиви та об'єкти:


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let countries = [`Ukraine`, `Aistralia`, `Brazil`, `Italy`, `Canada`, `Malta`, `Spain`, `USA`, `San Marino`, `Japan`]
// console.log(countries)
// console.log(countries[0])
// console.log(countries[1])
// console.log(countries[2])
// console.log(countries[3])
// console.log(countries[4])
// console.log(countries[5])
// console.log(countries[6])
// console.log(countries[7])
// console.log(countries[8])
// console.log(countries[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//   let book1 = {
//     title: `Harry Potter and the Chamber of Secrets`,
//     pageCount: 384,
//     genre: `Fantasy`
//
// };
//
// console.log(book1)
//
// let book2 = {
//   title: `To Kill a Mockingbird`,
//   pageCount: 320,
//   genre: `Historical Fiction`
// };
//
// console.log(book2)
//
//
// let book3 = {
//   title: `The Hobbit`,
//   pageCount: 144,
//   genre: `Fantasy novel`
// };
//
// console.log(book3)



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

//   let book1 = {
//     title: `Harry Potter and the Chamber of Secrets`,
//     pageCount: 384,
//     genre: `Fantasy`,
//     authors: [
//         {
//         name: `Joanne Rowling`,
//         age: 57
//         }
//     ]
//
// };
//
// console.log(book1)
//
// let book2 = {
//   title: `To Kill a Mockingbird`,
//   pageCount: 320,
//   genre: `Historical Fiction`,
//   authors: [
//       {
//           name: `Nelle Harper Lee`,
//           age: 89
//       }
//       ]
// };
//
// console.log(book2)
//
//
// let book3 = {
//   title: `The Hobbit`,
//   pageCount: 144,
//   genre: `Fantasy novel`,
//   authors: [
//       {
//           name:`John Ronald Reuel Tolkien`,
//           age: 81
//       }
//       ]
// };
//
// console.log(book3)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {name: `Anna` , username: `Anna95`, password:`12345678`},
//     {name: `Lily` , username: `Lily00`, password:`lily2000`},
//     {name: `Alex` , username: `Alex65`, password:`6578393`},
//     {name: `Mary` , username: `Mary74`, password:`mary7589595`},
//     {name: `John` , username: `John83`, password:`31038093`},
//     {name: `Vasya` , username: `Vasya33`, password:`Vasya343434`},
//     {name: `Olga` , username: `Olga22`, password:`Olga3244343`},
//     {name: `Dima` , username: `Dima006`, password:`439493434`},
//     {name: `Sasha` , username: `Sasha44`, password:`353495459`},
//     {name: `Natali` , username: `Natali888`, password:`Natali888888888`}
// ];
//
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 5;
// if (x !== 0) {
//     console.log(`Virno`)
// } else{
//     console.log(`Ne virno`)
// };


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 45;
// if (time > 0 && time <= 15) {
//     console.log(`1`);
// } else if (time > 16 && time <= 30) {
//     console.log(`2`);
// } else if (time > 31 && time <= 45) {
//     console.log(`3`);
// } else if (time > 46 && time <= 60) {
//     console.log(`4`);
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 10;
// if (day > 0 && day <= 10) {
//     console.log(`1`);
// } else if (day > 11 && day <= 20) {
//     console.log(`2`);
// } else if (day > 21 && day <= 31) {
//     console.log(`3`);
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let day = prompt(`enter number day`)
// switch (day) {
//     case`1`:
//         console.log(`Monday`);
//         break;
//     case`2`:
//         console.log(`Tuesday`);
//         break;
//     case`3`:
//         console.log(`Wednesday`);
//         break;
//     case`4`:
//         console.log(`Thursday`);
//         break;
//     case`5`:
//         console.log(`Friday`);
//         break;
//     case`6`:
//         console.log(`Saturday`);
//         break;
//     case`7`:
//         console.log(`Sunday`);
//         break;
// default:
// console.log(`???`)
//
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


// let x = 4;
// let y = 4;
//
// if (x>y) {
//     console.log(`x`)
// } else if (x<y) {
//     console.log(`y`)
// } else if (x===y) {
//     console.log(`=`)
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = 0;
// let res = x || `default`
// console.log(res)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ];
//
// if (coursesAndDurationArray[0].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[0].monthDuration <5) {
//     console.log(`Not cool`)
// };
//
// if (coursesAndDurationArray[1].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[1].monthDuration <5) {
//     console.log(`Not cool`)
// };
//
// if (coursesAndDurationArray[2].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[2].monthDuration <5) {
//     console.log(`Not cool`)
// };
//
// if (coursesAndDurationArray[3].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[3].monthDuration <5) {
//     console.log(`Not cool`)
// };
//
// if (coursesAndDurationArray[4].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[4].monthDuration <5) {
//     console.log(`Not cool`)
// };
//
// if (coursesAndDurationArray[5].monthDuration >=5) {
//     console.log(`Super!`)
// } else if (coursesAndDurationArray[5].monthDuration <5) {
//     console.log(`Not cool`)
// };
