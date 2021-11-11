import presentDrinks from "./src/presentDrinks.js"
// import getElement from "./src/getElement.js"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c'


window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL)
})