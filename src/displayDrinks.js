import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'

const displayDrinks = ({drinks}) => { // object destructuring
  const section = get('.section-center')
  const title = get('.title')
  if(!drinks) {
    hideLoading()
    title.textContent = 'sorry, no drinks match your search'
    section.innerHTML = null
    return
  }
  const newDrinks = drinks.map((drink) => {
    const {
      idDrink:id,
      strDrinkThumb:image,
      strCategory:category,
      strDrink:name
    } = drink
    return `<a href="./drink.html">
    <article class="cocktail" data-id="${id}">
      <img src="${image}" alt="${category}">
      <h3>${name}</h3>
    </article>
  </a>`
  }).join('')
  hideLoading()
  title.textContent = ''
  section.innerHTML = newDrinks
  return section
}

export default displayDrinks


