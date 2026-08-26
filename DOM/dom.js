// console.dir(document)
// const myH1 = document.all[10]
// console.log(myH1);

// Identifier Methods
// 1. getElementById()
// const myH1 = document.getElementById('header-title')
// console.log(myH1);

// setTimeout(() => {
//     myH1.textContent = 'New Item Lister'
// }, 2000)

// // CSS -->
// // element.style.cssProperty = 'updatedValue'

// const lis = document.getElementsByTagName('li')
// console.log(lis);

// for (let i = 0; i < lis.length; i++) {
//     if (i % 2 == 0) {
//         // even
//         // lis[i].textContent = 'EVEN'
//         lis[i].style.backgroundColor = 'gray'
//         lis[i].style.color = 'white'
//     } else {
//         // odd
//         //lis[i].textContent = 'ODD'
//     }
// }



// EVENTS --> addEventListner()
// element.addEventListner('nameOfEvent', function() {} )
// const btn = document.getElementById('my-btn')
// const clickHandler = () => {
//     console.log('Button was clicked!')
//     const h1 = document.getElementById('header-title')
//     h1.textContent = 'Button Click'
// }
// function dblClickHandler() {
//     console.log('Button Click Twice')
// }
// // btn.addEventListener('click', clickHandler())
// btn.addEventListener('click', clickHandler)
// btn.addEventListener('dblclick', dblClickHandler)

// const box = document.getElementById('text-input')
// box.addEventListener('mouseenter', () => {
//     console.log('Mouse Enter')
// })

// box.addEventListener('mouseleave', () => {
//     console.log('Mouse Leave')
// })

// box.addEventListener('copy', () => {
//     console.log('Text - Copy')
//     console.error('Text copied')
// })

// box.addEventListener('paste', () => {
//     console.log('Text - Paste')
// })

// box.addEventListener('cut', () => {
//     console.log('Text - Cut')
// })


// EVENT PARAM(OBJECT) --> addEventListener --> 2nd para --> parameter
// Event --> meta-data
// const btn1 = document.getElementById('submitBtn')
// const btn2 = document.getElementById('my-btn')

// console.log(btn1);
// console.log(btn2);

// const clickHandler = (e) => {
//     e.preventDefault();
//     console.log('SUBMIT Clicked!')
//     console.log(e);
// }

// btn1.addEventListener('click', (e) => { clickHandler(e) })

// btn2.addEventListener('click', () => {
//     console.log('BUTTON Clicked!')
// })


// Keyboard Events
const box = document.getElementById('text-input')
console.log(box);

// Data on runtime while user types
// box.addEventListener('keyup', (e) => {
//     console.log(e.target.value)
// })

// Data not on runtime, on a button click
// const btn = document.getElementById('submitBtn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const textValue = document.getElementById('text-input').value
//     const rangeValue = document.getElementById('my-range').value

//     console.log(textValue);
//     console.log(rangeValue);

// })


const myH2 = document.createElement('h2')
myH2.textContent = 'This is my H2'
myH2.setAttribute('id', 'my-h2')
myH2.setAttribute('class', 'my-h2-class')
console.log(myH2);