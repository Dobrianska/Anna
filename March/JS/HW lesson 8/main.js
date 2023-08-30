// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     // console.log(this)
// }
//
// const users = [
//     new User(1, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438),
//     new User(4, `Diana`, `Letty`, `Di@gmail.com`, 0674693834),
//     new User(6, `Ivan`, `Pavliv`, `Pavliv@gmail.com`, 0645678901),
//     new User(3, `Emily`, `Petrova`, `Emi@gmail.com`, 0574829500),
//     new User(2, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438),
//     new User(8, `Ivan`, `Pavliv`, `Pavliv@gmail.com`, 0645678901),
//     new User(9, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438),
//     new User(7, `Emily`, `Petrova`, `Emi@gmail.com`, 0574829500),
//     new User(5, `Diana`, `Letty`, `Di@gmail.com`, 0674693834),
//     new User(10, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438),
// ];
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // console.log(users.filter(user => !(user.id % 2)))
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // console.log(users.sort ((user1,user2) => user1.id-user2.id ));
// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clients = [
//         new Client(1, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438, [`bread`, `butter`, `lemon`]),
//         new Client(4, `Diana`, `Letty`, `Di@gmail.com`, 0674693834, [`potato`, `sausage`]),
//         new Client(6, `Ivan`, `Pavliv`, `Pavliv@gmail.com`, 0645678901, [`lemon`, `orange`]),
//         new Client(3, `Emily`, `Petrova`, `Emi@gmail.com`, 0574829500, [`sandwich`, `sprite`,`bread`, `butter`]),
//         new Client(2, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438, [`potato`, `sausage`]),
//         new Client(8, `Ivan`, `Pavliv`, `Pavliv@gmail.com`, 0645678901,[`sandwich`, `sprite`,`bread`, `butter`,`orange`]),
//         new Client(9, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438,[`potato`, `sausage`]),
//         new Client(7, `Emily`, `Petrova`, `Emi@gmail.com`, 0574829500, [`lemon`, `orange`]),
//         new Client(5, `Diana`, `Letty`, `Di@gmail.com`, 0674693834, [`potato`, `sausage`,`bread`]),
//         new Client(10, `Anna`, `Dobrianska`, `tsisinska.a@gmail.com`, 0688743438, [`lemon`, `orange`]),
//         ];
// // console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// // console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));
// //
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// // function Car(model, producer, year, maxSpeed, volume) {
// //     this.model = model;
// //     this.producer = producer;
// //     this.year = year;
// //     this.maxSpeed = maxSpeed;
// //     this.volume = volume;
// //     this.drivers = [];
// //
// //     this.drive = function () {
// //     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// // };
// //     this.info = function () {
// //     console.log(`модель - ${this.model},`,
// //                 `виробник - ${this.producer},`,
// //                 `рік випуску - ${this.year},`,
// //                 `максимальна швидкість - ${this.maxSpeed},`,
// //                 `об'єм двигуна - ${this.volume}`,
// //                 `водій - ${JSON.stringify(this.drivers)}`)
// // };
// //     this.increaseMaxSpeed = function (newSpeed) {
// //         this.maxSpeed = this.maxSpeed + newSpeed
// //     };
// //
// //     this.changeYear = function (newValue) {
// //         this.year = newValue
// //     };
// //
// //     this.addDriver = function (driver) {
// //         this.drivers.push(driver);
// //     }
// // }
// //
// // let car1 = new Car(`Focus 2`, `Ford`, 2010, 220, 1.6)
// // console.log(car1);
// // car1.drive();
// // car1.info ();
// // car1.increaseMaxSpeed (20);
// // car1.info ();
// // car1.changeYear(2014);
// // car1.info();
// // car1.addDriver ({name: `Anna`, experience: `3 years`});
// // car1.info();
//
//
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
//
// // class Car {
// //     constructor(model, producer, year, maxSpeed, volume) {
// //         this.model = model;
// //         this.producer = producer;
// //         this.year = year;
// //         this.maxSpeed = maxSpeed;
// //         this.volume = volume;
// //         this.drivers = [];
// //     };
// //     drive (){
// //         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// //     };
// //     info () {
// //     console.log(`модель - ${this.model},`,
// //                 `виробник - ${this.producer},`,
// //                 `рік випуску - ${this.year},`,
// //                 `максимальна швидкість - ${this.maxSpeed},`,
// //                 `об'єм двигуна - ${this.volume}`,
// //                 `водій - ${JSON.stringify(this.drivers)}`)
// // };
// //     increaseMaxSpeed (newSpeed) {
// //         this.maxSpeed = this.maxSpeed + newSpeed
// //     };
// //
// //     changeYear(newValue) {
// //         this.year = newValue
// //     };
// //     addDriver(driver) {
// //         this.drivers.push(driver);
// //     }
// // }
// //
// // let car2 = new Car(`Focus 2`, `Ford`, 2010, 220, 1.6);
// // console.log(car2);
// // car2.drive();
// // car2.info ();
// // car2.increaseMaxSpeed (20);
// // car2.info ();
// // car2.changeYear(2014);
// // car2.info();
// // car2.addDriver ({name: `Anna`, experience: `3 years`});
// // car2.info();
//
//
//
// //
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, boot) {
//         this.name = name;
//         this.age = age;
//         this.boot = boot;
//     };
//     findPrincess1 (arr) {
//         for (const princess of arr) {
//             if (princess.footSize === this.boot) {
//                 return princess;
//             }
//
//         }
//
//     }
//
//     findPrincess2 (arr) {
//         return arr.find((princess) => princess.footSize === this.boot)
//             }
//
// }
//
// const cindy = [
//     new Cinderella(`Anna`, 23, 39),
//     new Cinderella(`Diana`, 19, 38),
//     new Cinderella(`Mary`, 24, 40),
//     new Cinderella(`Emily`, 18, 35),
//     new Cinderella(`Oksana`, 30, 34),
//     new Cinderella(`Olga`, 27, 37),
//     new Cinderella(`Mira`, 23, 39),
//     new Cinderella(`Evgenia`, 19, 36),
//     new Cinderella(`Natali`, 20, 37),
//     new Cinderella(`Tanya`, 28, 40)
// ]
//
//
//
//
// const prince = new Prince (`Dima`, 27, 39);
// console.log(prince.findPrincess1(cindy));
// console.log(prince.findPrincess2(cindy));
