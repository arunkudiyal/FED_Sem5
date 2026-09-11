// s1 --> create the object of XHR
const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/users'
console.log(xhr.readyState) // 0

// s2 --> open a portal of communication b/w client & server
// xhr.open('requestMethod', 'url')
xhr.open('GET', url)
console.log(xhr.readyState) // 1

// s4 --> 
// readyState --> state value, which tells request is ready or not
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)     // 1 --> 2 --> 3 --> 4
    if (xhr.readyState == 4 && xhr.status == 200) {
        const resObj = JSON.parse(xhr.responseText)
        let output = ''
        for (let i = 0; i < resObj.length; i++) {
            output += `
                <div>
                    <img style="height: 250px; width: 250px;" src="${resObj[i].avatar_url}" />
                    <h2>${resObj[i].login}</h2>
                    <a href="${resObj[i].html_url}">Profile</a>
                </div>
                <hr />
            `
        }
        document.getElementById('main').innerHTML = output
    }
}

// s3 --> send the request
xhr.send();                 // readyState = 2