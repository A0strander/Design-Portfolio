/*Stores static object data to be rendered unto the recipe page. 
Users can click on the renered objects to view more details*/

import {renderRecipes} from './views'
import {setFilters} from './filter-items'

//index items
renderRecipes()

document.querySelector('#search-list').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderRecipes()
})