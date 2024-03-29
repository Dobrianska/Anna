// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x = 'hello world';
// console.log(x.length)

// let y = 'lorem ipsum';
// console.log(y.length);

// let a = 'javascript is cool';
// console.log(a.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x = 'hello world';
// console.log(x.toUpperCase());

// let y = 'lorem ipsum';
// console.log(y.toUpperCase());


// let a = 'javascript is cool';
// console.log(a.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let x = 'HELLO WORLD';
// console.log(x.toLowerCase());

// let y = 'LOREM IPSUM';
// console.log(y.toLowerCase())

// let a = 'JAVASCRIPT IS COOL';
// console.log(a.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split = str.split(` `);
// console.log(split);


//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let number = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(number.map(value => number.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (nums, direction) => {
//     if (direction === `ascending`) {
//         return nums.sort((a, b) => a - b);
//     }
//     if (direction === `descending`) {
//         return nums.sort ((a,b) => b-a);
//     }
// }
//
// console.log(sortNums(nums, `ascending`));
// console.log(sortNums(nums, `descending`));


// ==========================
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((a,b) => {
//     return b.monthDuration - a.monthDuration;
// })
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let map = coursesAndDurationArray.map ((value, index) => {
//     return {
//         ...value, id: index+1}
// })
//
// console.log(map);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
// ];
// - знайти піковий туз
// let find = cards.find(value => value.cardSuit === "spade" && value.value === `ace`);
// console.log(find);

// - всі шістки

// let filter = cards.filter(value => value.value === `6`);
// console.log(filter);

// - всі червоні карти

// let filter = cards.filter(value => value.color === `red`);
// console.log(filter);


// - всі буби

// let filter = cards.filter(value => value.cardSuit === `diamond`);
// console.log(filter);


// - всі трефи від 9 та більше

// let filter = cards.filter(value => value.value >= `9` && value.cardSuit === `clubs`);
// console.log(filter);



//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let reduce = cards.reduce((accumulator, card) => {
//     if (card.cardSuit === `spade`) {
//         accumulator.spades.push(card);
//     }
//     ;
//     if (card.cardSuit === `diamond`) {
//         accumulator.diamonds.push(card);
//     }
//     ;
//     if (card.cardSuit === `heart`) {
//         accumulator.hearts.push(card);
//     }
//     ;
//     if (card.cardSuit === `clubs`) {
//         accumulator.clubs.push(card);
//     }
//     ;
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
// console.log(reduce)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// --написати пошук всіх об'єктів, в який в modules є sass

// let filter = coursesArray.filter(value => value.modules.includes(`sass`));
// console.log(filter);

// --написати пошук всіх об'єктів, в який в modules є docker
//
// let filter = coursesArray.filter(value => value.modules.includes(`docker`));
// console.log(filter)