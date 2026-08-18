// console.dir(document)
// const myH1 = document.all[10]
// console.log(myH1);

// Identifier Methods
// 1. getElementById()
const myH1 = document.getElementById('header-title')
console.log(myH1);

setTimeout(() => {
    myH1.textContent = 'New Item Lister'
}, 2000)

// CSS -->
// element.style.cssProperty = 'updatedValue'

const lis = document.getElementsByTagName('li')
console.log(lis);

for (let i = 0; i < lis.length; i++) {
    if (i % 2 == 0) {
        // even
        // lis[i].textContent = 'EVEN'
        lis[i].style.backgroundColor = 'gray'
        lis[i].style.color = 'white'
    } else {
        // odd
        //lis[i].textContent = 'ODD'
    }
}


// EVENTS