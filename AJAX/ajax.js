console.log('AJAX')

// AJAX / XHR

const url = 'https://api.github.com/users'

// s1 --> create an object of XHR
const xhr = new XMLHttpRequest()
console.log(xhr.readyState)

// s2 --> open the portal of communication b/w client & server
xhr.open('GET', url)
console.log(xhr.readyState)

// vvImp s3 --> react to onreadystatechange
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)
    if (xhr.readyState == 4) {
        console.log(xhr.responseText)
    }
}

xhr.send()