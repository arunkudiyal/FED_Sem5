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


// ARRAYS --> collection of objects
// const nums = [10, 'hello', true, null, undefined]
// console.log(nums);
// console.log(nums[1]);

// nums = []
// console.log(`Size - ${nums.length}`);

// nums[1] = 'bye'
// // nums = []
// console.log(nums);

// let nums1 = [10, 20, 30, 40, 50]
// let x = new Array(1, 2, 3, 4, 5)

// console.log(nums1);
// console.log(x);

// console.log(nums1);

// // let nums2 = nums1;           // copy-address(refernce)
// let nums2 = [...nums1]

// console.log(nums2);

// nums1[0] = 100
// console.log(nums1);
// console.log(nums2);


// let nums = [10, 20, 30, 40, 50]
// for (let i = 0; i < nums.length; i += 2) {
//     console.log(`Element ${i} --> ${nums[i]}`)
// }


// HIGER ORDER ARRAY METHODS
// const nums = [1, 2, 3, 4, 5]
// console.log(nums);

// 1. forEach
// nums.forEach( (itrValue, index, arr) => { ... } )

// nums.forEach((num, idx, arr) => console.log(`Element ${idx} --> ${num} | ${arr}`))

// 2. map
// const updatedNums = nums.map((num, idx) => {
//     if (idx % 2 == 0) return num + 5
//     else return num
// })

// const nums = [1, 2, 3, 4, 5]

// const updatedNums = nums.map((num) => { return num + 5 })
// console.log(nums);
// console.log(updatedNums);

// 3. filter()
// const evens = nums.filter(num => { return num % 2 == 0 && num > 3 })
// const odds = nums.filter(num => num % 2 != 0)
// console.log(evens);
// console.log(odds);


// const nums = [4, 7, 21, 2, 372, 71, 273]

// console.log(nums);
// nums.sort((a, b) => { return b - a })
// console.log(nums);


// const nums = [10, 20, 30, 40]
// console.log(nums);

// let newLength = nums.push(50)
// console.log(nums);
// console.log(newLength);

// let popped = nums.pop()
// console.log(nums);
// console.log(popped);

// nums.splice(1, 1)
// nums.splice(1, 10)
// nums.splice(1, 2)
// console.log(nums);

// const nums = [10, 20, 30, 40, 50]
// console.log(nums);

// nums.shift()
// console.log(nums);

// nums.unshift(5, 10)
// console.log(nums);


// JS Objects --> { key: value }

// const person = {
//     id: 101,
//     name: 'Person One',
//     email: 'personone@domain.com',
//     isAdult: true,
//     hobbies: ['playing soccer', 'reading', 'writing'],
//     printDetails: () => { console.log(`${person.id} --> ${person.name}`) },
//     address: {
//         city: 'Dehardun',
//         state: 'Uttarakhand',
//         country: 'India'
//     }
// }
// console.log(person);
// person.printDetails()
// console.log(person.address.country);
// console.log(person.hobbies[2]);


// Array of Objects 
const people = [
    {
        id: 101,
        name: 'Person One',
        email: 'personone@domain.com',
        isAdult: true,
        hobbies: ['playing soccer', 'reading', 'writing'],
        printDetails: () => { console.log(`${person.id} --> ${person.name}`) },
        address: {
            city: 'Dehardun',
            state: 'Uttarakhand',
            country: 'India'
        }
    },
    {
        id: 102,
        name: 'Person Two',
        email: 'persontwo@domain.com',
        isAdult: true,
        hobbies: ['playing cricket', 'studying', 'scrolling'],
        printDetails: () => { console.log(`${person.id} --> ${person.name}`) },
        address: {
            city: 'New Delhi',
            state: 'New Delhi',
            country: 'India'
        }
    }
]

console.log(people[1].hobbies[1]);


const jsonData = JSON.stringify(people)
console.log(jsonData);

const convertedObj = JSON.parse(jsonData)
console.log(convertedObj);


