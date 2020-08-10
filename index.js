// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById('setup')
const punchlineDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

const getJoke = async () => {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  )
  const joke = await jokePromise.json()

  console.log(joke[0])
}

getJoke()
