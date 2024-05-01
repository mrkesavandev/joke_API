const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("button")
const category =document.getElementById("category")

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&type=single"

let getApiJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        
        jokeContainer.textContent = item.joke
        category.textContent = item.category

    })
    .catch(err => console.log(err))

}

btn.addEventListener("click", getApiJoke)

getApiJoke();