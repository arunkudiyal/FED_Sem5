// s1 --> create the object of XHR
const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/users'
console.log(xhr.readyState) // 0

// s2 --> open a portal of communication b/w client & server
// xhr.open('requestMethod', 'url')
xhr.open('GET', url)
console.log(xhr.readyState) // 1

// s3 --> 
// readyState --> state value, which tells request is ready or not
xhr.onreadystatechange = () => {
    console.log(xhr.readyState) // 2 --> 3 --> 4
    if (xhr.readyState == 4) {
        const resObj = JSON.parse(xhr.responseText)
        let output = ''
        for (let i = 0; i < resObj.length; i++) {
            output += `
                <div>
                    <img style="height: 500px; width: 500px;" src="${resObj[i].avatar_url}" />
                    <br />
                    <h2>${resObj[i].login}</h2>
                    <a href="${resObj[i].html_url} target="_blank ">Visit GitHub</a>
                </div>  
                <hr />
            `
        }
        console.log(output)
        document.getElementById('main').innerHTML = output
    }
}

xhr.send()