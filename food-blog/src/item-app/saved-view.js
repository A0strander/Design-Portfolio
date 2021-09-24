import {getFilters} from './filter-items'
import {sortRecipes} from './item'
import {getSaved, removeSaved} from './saved-item'

const generateSaved = (item) => {
    const containerEl = document.createElement('article')
    const figEl = document.createElement('figure')
    const imgEl = document.createElement('img')
    const figCapEl = document.createElement('figcaption')

    const hGroupEl = document.createElement('hgroup')
    const titleEl = document.createElement('a')
    const levelEl = document.createElement('h3')
    const paraEl = document.createElement('p')

    const buttonEl = document.createElement('button')

    const imgLink = item.image
    imgEl.setAttribute('src', imgLink)
    figEl.appendChild(imgEl)

    figCapEl.textContent = item.figcap
    figEl.appendChild(figCapEl)
    containerEl.classList.add('list-item')
    containerEl.appendChild(figEl)

    //Text conent
    titleEl.textContent = item.title
    titleEl.classList.add('list-item__title')
    hGroupEl.appendChild(titleEl)

    levelEl.textContent = item.level
    levelEl.classList.add('list-item__subtitle')
    hGroupEl.appendChild(levelEl)

    paraEl.textContent = item.para
    paraEl.classList.add()
    hGroupEl.appendChild(paraEl)

    buttonEl.textContent = 'Remove'
    buttonEl.classList.add('button--secondary', 'button--text')
    hGroupEl.appendChild(buttonEl)
    containerEl.appendChild(hGroupEl)

    buttonEl.addEventListener('click', () => {
        removeSaved(item.id)
        renderSaved()
    })

    //Link to viewer page
    titleEl.setAttribute ('href', `/view.html#${item.id}`)
    
    return containerEl
}

//Render items
const renderSaved = () => {
    const savedEl = document.querySelector('#saves')
    const filters = getFilters ()
    const recipeList = sortRecipes(filters.sortBy)
    const savedList = getSaved()
    let userSaved = []
    userSaved = recipeList.filter(recipe => {
        return savedList.find(item => {
            return item.id === recipe.id
        })
    })
    const filterSaved = userSaved.filter((item) => item.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    savedEl.innerHTML = ''

    if(filterSaved.length > 0) {
        filterSaved.forEach((item) => savedEl.appendChild(generateSaved(item)))
    } else {
        const emptyRecipes = document.createElement('p')
        emptyRecipes.textContent = "You have no saved recipes."
        emptyRecipes.classList.add('empty-message')
        savedEl.appendChild(emptyRecipes)
    }
    
}


export {generateSaved, renderSaved}