import presentDrinks from "./src/presentDrinks.js"
import './src/searchForm.js'

// for initial load
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c'


window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL)
})