// Calling an API & GET-ting the data

// s1 --> create an object of XMLHttpRequest
const xhr = new XMLHttpRequest()
const endpoint = 'https://api.github.com/users'
console.log(xhr.readyState)         // 0

// vImp
// s2 --> open the portal of communication b/w client (JS app) & server (endpoint)
// xhr.open(requestMethod, endpoint)
xhr.open('GET', endpoint)
console.log(xhr.readyState)         // 1

// s3 --> record for onreadystatechange
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)     // 1 --> 2 --> 3 --> 4
    console.log(xhr.responseText)
}

// s4 --> send the request
xhr.send()
