import { getRecipes } from "./item";
import { getArticle } from "./article-item";
import { generateRecipes } from "./views";
import { generateArticle } from "./article-view";

const renderRandomArt = () => {
    const articleEl = document.querySelector('#articles')
    const articleList = getArticle()
    const randomArt = articleList[Math.floor(Math.random() * articleList.length)]

    articleEl.appendChild(generateArticle(randomArt))
}

const renderRandomRec = () => {
    const recipeEl = document.querySelector('#playground')
    const recipeList = getRecipes()   
    const randomRec = recipeList[Math.floor(Math.random() * recipeList.length)]

    recipeEl.appendChild(generateRecipes(randomRec))
}

renderRandomArt()
renderRandomRec()