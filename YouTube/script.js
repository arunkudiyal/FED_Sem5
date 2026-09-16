const box = document.getElementById('search')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // API call
    const xhr = new XMLHttpRequest();

    const apiKey = 'AIzaSyDbZVXGe6CUjfF_4IroHTPQh-9I0Ouf914'
    const searchValue = box.value

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchValue}`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)
            console.log(response);
        }
    }

    xhr.send()
})


