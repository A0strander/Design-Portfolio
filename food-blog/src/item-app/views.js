import {getFilters} from './filter-items'
import {getRecipes, sortRecipes} from './item'
import {createSaved} from './saved-item'

//Creates view for html

//Generate DOM for items
const generateRecipes = (recipe) => {
    const containerEl = document.createElement('article')
    const figEl = document.createElement('figure')
    const imgEl = document.createElement('img')
    const figCapEl = document.createElement('figcaption')

    const hGroupEl = document.createElement('hgroup')
    const titleEl = document.createElement('a')
    const levelEl = document.createElement('h3')
    const paraEl = document.createElement('p')

    const imgLink = recipe.image
    imgEl.setAttribute('src', imgLink)
    figEl.appendChild(imgEl)

    figCapEl.textContent = recipe.figcap
    figEl.appendChild(figCapEl)
    containerEl.classList.add('list-item')
    containerEl.appendChild(figEl)

    //Text content
    titleEl.textContent = recipe.title
    titleEl.classList.add('list-item__title')
    hGroupEl.appendChild(titleEl)

    levelEl.textContent = recipe.level
    levelEl.classList.add('list-item__subtitle')
    hGroupEl.appendChild(levelEl)

    paraEl.textContent = recipe.para
    paraEl.classList.add()
    hGroupEl.appendChild(paraEl)
    containerEl.appendChild(hGroupEl)

    const buttonEl = document.createElement('button')
    buttonEl.textContent = 'Save'
    buttonEl.classList.add('button--secondary', 'button--text')
    hGroupEl.appendChild(buttonEl)
    buttonEl.addEventListener('click', () => {
       const id = recipe.id
        createSaved(id)
       
    })


    //Link to viewer page
    titleEl.setAttribute ('href', `/view.html#${recipe.id}`)
    
    return containerEl
}

//Render items
const renderRecipes = () => {
    const recipeEl = document.querySelector('#playground')
    const filters = getFilters ()
    const recipeList = sortRecipes(filters.sortBy)
    const filterRecipes = recipeList.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    recipeEl.innerHTML = ''

    if(filterRecipes.length > 0) {
        filterRecipes.forEach((recipe) => recipeEl.appendChild(generateRecipes(recipe)))
    } else {
        const emptyRecipes = document.createElement('p')
        emptyRecipes.textContent = "Opps! Our dog ate the recipe book."
        emptyRecipes.classList.add('empty-message')
        recipeEl.appendChild(emptyRecipes)
    }
    
}

const inViewPage = (itemId) => {
    const imgEle = document.querySelector('#item-image')
    const titleEle = document.querySelector('#item-title')
    const listEle = document.querySelector('#item-list')
    const paraEle = document.querySelector('#item-body')
    const recipeView = getRecipes()
    const viewRecipe = recipeView.find((recipe) => recipe.id === itemId)
    
    const imgLink = viewRecipe.image
    imgEle.setAttribute('src', imgLink)
    titleEle.textContent = viewRecipe.title
    titleEle.classList.add('list-item__title')
    listEle.textContent = viewRecipe.ingredients
    listEle.classList.add('list-item__subtitle')
    paraEle.textContent = viewRecipe.directions
    paraEle.classList.add('list-item__subtitle')
}

export {inViewPage, generateRecipes, renderRecipes}