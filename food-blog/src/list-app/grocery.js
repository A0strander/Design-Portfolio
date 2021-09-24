/*Stores user entered objects into an array that is rendered onto the grocery page as a interactive check list*/

import {createList} from './list'
import {renderList} from './view'
import {setFiltersList} from './filter-lists'
//index functions

renderList()

document.querySelector('#search-list').addEventListener('input', (e) => {
    setFiltersList({
        searchText: e.target.value
    })
    renderList()
})

document.querySelector('#hide-comp').addEventListener('change', (e) => {
    setFiltersList({
        hideCompleted: e.target.checked
    })

    renderList()
})

document.querySelector('#add-item').addEventListener('submit', (e) => {
    const title = e.target.elements.text.value.trim()
    e.preventDefault()
    if (title.length > 0) {
        createList(title)
    }
    renderList() // calls render
    e.target.elements.text.value = '' // clears input
})
