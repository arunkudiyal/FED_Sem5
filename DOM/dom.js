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

// Event Parameter --> Event --> meta-data
const btn = document.getElementById('my-btn')
const clickHandler = (para) => {
    console.log('Hello');
    console.log(para);

}
btn.addEventListener('click', (event) => { clickHandler(event) })