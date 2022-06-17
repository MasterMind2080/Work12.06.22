// HomeWork 12.06.22

// Task 1
// class User {
//   /**
//    * @param {string} firstName
//    * @param {string} lastName
//    * @param {number} age
//    */
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
// }

// // Sample usage - do not modify
// console.log(new User("Sam", "Blue", 18));
// console.log(new User("Alex", "Green", 25));

// Task 2
// // define classes here
// class User{
//     constructor(fname, lname, mrs, age){
//         this.lname = lname;
//         this.mrs = mrs;
//         this.age = age;
//         this.fname = fname;
//     }
    
//     canVote(){
//         return this.age >= 18;
//     }

//     getFullName(){
//         return `${this.fname} ${this.lname}`;
//     }
// }

// class Admin extends User {

// }

// // Sample usage - do not modify
// const user = new User("Sam", "Green", 17);
// console.log(user.canVote()); // false
// console.log(user.getFullName()); // "Sam Green"

// const admin = new Admin("Alex", "Blue", 20);
// console.log(admin.canVote()); // true
// console.log(admin.getFullName()); // "Alex Blue [admin]"
// console.log(admin.updateConfig()); // "Config updated"

// Task 3
// // define classes here
// // ?

// // Sample usage - do not modify
// const galaxy = new Android("Galaxy", 400);
// console.log(galaxy.getDescription()); // "The Galaxy costs 400"
// console.log(galaxy.getVersion()); // 12 (always for android phones)

// const iphone = new iOS("iPhone", 500);
// console.log(iphone.getDescription()); // "The iPhone costs 500"
// console.log(iphone.getVersion()); // 15 (always for iOS phones)

// Task 4
/*
  Title:
  Create Phone Number
  Description:
  Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
 
const createPhoneNumber = numbers => {
  function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  }
}

// Task 5
// /*
//   Title:
//   Alternate case
//   Description:
//   Напишите функцию alternateCase, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.
//   Examples:
//   Hello World -> hELLO wORLD
// */
 
 
// const alternateCase = str => {
//     return str
//     // ? 
// }
