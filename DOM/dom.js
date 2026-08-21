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

// Event Parameter/Object --> Event --> meta-data
// addEventListner --> 2nd para --> event parameter 
// const btn = document.getElementById('my-btn')
// const clickHandler = (event) => {
//     console.log('Hello');
//     console.log(event);

// }
// // btn.addEventListener('click', (event) => { clickHandler(event) })
// btn.addEventListener('click', (event) => {
//     console.log('Hello again');
//     console.log(event);
// })


// Keyboard

// const box = document.getElementById('text-input')
// console.log(box);

// box.addEventListener('keyup', (event) => {
//     console.log(event.target.value)
// })

// const btn = document.getElementById('submitBtn')
// const box = document.getElementById('text-input')
// const check = document.getElementById('my-check')

// console.log(box.value)

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(box.value)
//     console.log(check.value)
// })

// const myForm = document.getElementById('form')
// console.log(myForm.firstElementChild)

// console.log(myForm.firstElementChild.nextElementSibling);

// console.log(myForm.parentElement)
// console.log(myForm.previousElementSibling)


// .createElement
// const para = document.createElement('p')
// console.log(para);
// para.textContent = 'Welcome to Item Lister. It helps keep a track of all the items!'
// para.setAttribute('id', 'app-intro')
// para.setAttribute('style', 'color: yellow')

// setTimeout(() => {
//     document.getElementById('intro').appendChild(para)
// }, 2000)


const btn = document.getElementById('submitBtn')
btn.addEventListener('click', (e) => {
    e.preventDefault()

    const value = document.getElementById('text-input').value

    const myLi = document.createElement('li')
    myLi.setAttribute('class', 'list-group-item')
    myLi.textContent = value

    document.getElementById('items').appendChild(myLi)

    document.getElementById('text-input').value = ''
})