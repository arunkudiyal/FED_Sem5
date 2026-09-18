const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const search = document.getElementById('searchBox').value

    const xhr = new XMLHttpRequest()
    const apiKey = 'AIzaSyBmnGj6x4ijIuvJPlNbDaRaH2QpEIlATTA'

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${search}`

    // Call the API
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
        }
    }

    xhr.send()
})