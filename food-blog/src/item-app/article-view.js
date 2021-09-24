import {getFilters} from './filter-items'
import {getArticle, sortArticles} from './article-item'

const generateArticle = (article) => {
    const containerEl = document.createElement('article')
    const figEl = document.createElement('figure')
    const imgEl = document.createElement('img')
    const figCapEl = document.createElement('figcaption')

    const hGroupEl = document.createElement('hgroup')
    const titleEl = document.createElement('a')
    const dateEl = document.createElement('h3')
    const subParaEl = document.createElement('p')

    const artImgLink = article.image
    imgEl.setAttribute('src', artImgLink)
    figEl.appendChild(imgEl)

    figCapEl.textContent = article.figcap
    figEl.appendChild(figCapEl)
    containerEl.classList.add('list-item')
    containerEl.appendChild(figEl)

    titleEl.textContent = article.title
    titleEl.classList.add('list-item__title')
    hGroupEl.appendChild(titleEl)

    dateEl.textContent = article.date
    dateEl.classList.add('list-item__subtitle')
    hGroupEl.appendChild(dateEl)

    subParaEl.textContent = article.subPara
    subParaEl.classList.add()
    hGroupEl.appendChild(subParaEl)

    containerEl.appendChild(hGroupEl)

    titleEl.setAttribute ('href', `/viewArt.html#${article.id}`)
    
    return containerEl
}

const renderArticle = () => {
    const articleEl = document.querySelector('#articles')
    const filters = getFilters()
    const artList = sortArticles(filters.sortBy)
    const filterArticles = artList.filter((article) => article.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    articleEl.innerHTML = ''

    if(filterArticles.length > 0){
        filterArticles.forEach((article) => articleEl.appendChild(generateArticle(article)))
    }else {
        const emptyRecipes = document.createElement('p')
        emptyRecipes.textContent = "Opps! Our dog ate the newspaper."
        emptyRecipes.classList.add('empty-message')
        articleEl.appendChild(emptyRecipes)
    }

}

const artIntViewPage = (artId) => {
    const artImage = document.querySelector('#art-image')
    const artTitle = document.querySelector('#art-title')
    const artSubTitle = document.querySelector('#art-subtitle')
    const artPara = document.querySelector('#art-para')
    const artView = getArticle()
    const viewArt = artView.find((article) => article.id === artId)

    const artImageLink = viewArt.image
    artImage.setAttribute('src', artImageLink)
    artTitle.textContent = viewArt.title
    artTitle.classList.add('list-item__title')
    artSubTitle.textContent = viewArt.subPara
    artSubTitle.classList.add('list-item__subtitle')
    artPara.textContent = viewArt.para
    artPara.classList.add()
}

export {generateArticle, renderArticle, artIntViewPage}