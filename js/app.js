const headers = new Headers();

headers.append('Accept', 'application/json')

const url = 'https://icanhazdadjoke.com/'
const request = new Request(url, {
    headers: headers
})
const inputJoke = document.querySelector('#input-joke')
const fetchImage = document.querySelector('#fetch-image')
const imageContainer = document.querySelector('#image-container')
const fetchJoke = () => {
    // console.log('fetch joke')
    fetch(request)
        .then(response => response.json()
        )
        .then((json) => {
    // inputJoke.innerText = ''
        inputJoke.innerText = json.joke
        return json.id
    })
    // .then((jokeid))

}
// const inputImage = () => {
//     fetch(`${url}j/${jokeid}.png`)
//     .then(response => response.blob())
//     .then((blob) => {
//         console.log(blob)
//         const objectURL = URL.createObjectURL(blob)
//         const imageElement= document.createElement('img')
//         imageElement.src = objectURL
//         imageContainer.appenChild(imageElement)}
//         )}
    
    
document.addEventListener('DOMContentLoaded', () =>{
    const fetchJokeBtn = document.querySelector('#fetch-joke')
    
    fetchJokeBtn.addEventListener('click', fetchJoke)
    fetchImage.addEventListener('click', inputImage)
})
