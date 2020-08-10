// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById('setup')
const punchlineDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')
let punchline

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
/* Create the getPunchline function. This function should: 
    Insert the punchline into the punchlineDiv
    Add the class "bubble" to the punchlineDiv
    Toggle the "hidden" class on both buttons.
*/

const getJoke = async () => {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  )
  const joke = await jokePromise.json()

  // Get the setup from the joke and insert it into the setupDiv element
  setupDiv.innerText = joke[0].setup

  // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
  // Assign the current jokes punchline to the punchline variable.
  punchline = joke[0].punchline

  punchlineBtn.classList.toggle('hidden')
  newJokeBtn.classList.toggle('hidden')
}

const getPunchline = () => {
  punchlineDiv.innerText = punchline
  punchlineDiv.classList.add('bubble')

  punchlineBtn.classList.toggle('hidden')
  newJokeBtn.classList.toggle('hidden')
}

punchlineBtn.addEventListener('click', getPunchline)

getJoke()
