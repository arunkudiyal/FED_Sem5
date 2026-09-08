// s1 --> create the object of XHR
const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/users'
console.log(xhr.readyState) // 0

// s2 --> open a portal of communication b/w client & server
xhr.open('GET', url)
console.log(xhr.readyState) // 1

// s3 --> 
// readyState --> state value, which tells request is ready or not
xhr.onreadystatechange = () => {
    console.log(xhr.readyState) // 2 --> 3 --> 4
    if (xhr.readyState == 4) {
        const resObj = JSON.parse(xhr.responseText)
        for (let i = 0; i < resObj.length; i++) {
            console.log(resObj[i].avatar_url)
        }
    }
}

xhr.send()