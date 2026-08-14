// Statically-typed | int x = 100
// Dynamically-typed | x = 100; x = "hello"
// int x = 100
// x = "John Doe"

// let x = 100
// let y = new Number(200)
// console.log(x);
// console.log(typeof (x));

// console.log(y);
// console.log(typeof (y));

// x = 'John Doe'
// let z = new String('John Doe')
// console.log(x);
// console.log(typeof (x));

// x = true
// console.log(x);
// console.log(typeof (x));

// let myVar1 = undefined
// console.log(myVar1);
// console.log(typeof (myVar1));

// let myVar2 = null
// console.log(myVar2);
// console.log(typeof (myVar2));


// FUNCTIONS
// public int sum(int x, int y)
// function sum(num1, num2) {
//     return num1 + num2;
// }

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(100, 20));
// console.log(typeof (sum));


// // ES6 Arrow Function
// let substract = (a, b) => { return a - b; }
// console.log(substract(100, 20));
// console.log(typeof (substract));

// INTERNAL TYPECAST
// console.log(diff(200, 100));
// console.log(diff('hello', 'bye'));
// console.log(100 / 0);

// console.log(sum(100, 200));
// console.log(sum('hello', 'bye'));
// console.log(sum(true, true));
// console.log(sum("true", true));

// variable (holds) ---> OBJECT
// functions --> OBJECT

// let funcVaribale = sum;
// console.log(funcVaribale);
// console.log(typeof (funcVaribale));
// console.log(funcVaribale(100, 200));
// let sum = (num1, num2) => { return num1 + num2; }
// function sum(num1, num2) {

// }

// function printAverage(num1, num2, cb) {
//     let sum
//     if (typeof (cb) == 'function') {
//         sum = cb(num1, num2)
//     }
//     console.log(sum / 2);
// }

// printAverage(100, 200, (num1, num2) => { return num1 + num2; })
// printAverage(100, 200, function (a, b) {
//     return a - b;
// })

// // setTimeout(handlerFunction, delay - in millisecs)

// setTimeout(function () {
//     console.log('Hello JavaScript');
// }, 2000)




// Arrays
// collection of similar data types
// int[] arr = new int[5]
// collection of objects

// let arr = [10, 20, 30, 40]
// console.log(arr);

// let arr2 = new Array(100, 200, 300, 400)
// console.log(arr2);

// function print() {
//     console.log('IT WORKS!')
// }
// let myArr = [100, 'hello', true, null, undefined, print]
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[2]);
// myArr[5]()


// let, var & const
// const nums = [100, 200, 300, 400, 500]
// console.log(nums);

// nums[1] = 20
// console.log(nums);
// nums = []

// Q:- 
// let numsCopy = nums
// let numsCopy = []
// for (let i = 0; i < nums.length; i++) {
//     numsCopy[i] = nums[i]
// }

// SPREAD OPERATOR = ...
// let numsCopy = [...nums]

// nums[0] = 10
// nums[1] = 20
// console.log(nums);
// console.log(numsCopy);



// ES6 HIGHER ORDER ARRAY METHODS
// gets applied to each elt in the array

// const arr = [10, 15, 20, 25, 30, 35, 40]
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(`Index ${i} --> ${arr[i]}`)
// }

// 1. forEach()
// arrName.forEach( callBackFunction )
// arrName.forEach( (itrValue) => { } )
// arr.forEach((value) => { console.log(value) })
// arr.forEach(value => { console.log(value) })
// arr.forEach(value => console.log(value))

// const arr = [10, 15, 20, 25, 30, 35, 40]
// arr.forEach((value, idx, arr) => { console.log(`Index ${idx} --> ${value} | ${arr}`) })

// arr.forEach((value) => { console.log(`Square - ${value * value}`) })

// 2. map()

// const squares = arr.map(value => { return value * value })
// console.log(arr);
// console.log(squares);

// let odds = arr.map((value) => {
//     if (value % 2 != 0) return value
//     else return 'EVEN'
// })
// console.log(odds);

// 3. filter()
const nums = [10, 15, 20, 25, 30, 35, 40]
const evens = nums.filter(num => { return num % 2 == 0 })
const odds = nums.filter(num => { return num % 2 != 0 })
const vals = nums.filter(num => { return num > 0 })

console.log(nums);
console.log(evens);
console.log(odds);
console.log(vals);
