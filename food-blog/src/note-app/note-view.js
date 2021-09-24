import {renderNotes} from './view'
import {setFilters} from './filters'
import {createNotes, saveNotes} from './notes'


//index functions

renderNotes()

document.querySelector('#search-notes').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

document.querySelector('#add-note').addEventListener('submit', (e) => {
    const title = e.target.elements.text.value.trim()
    const body = e.target.elements.body.value.trim()
    e.preventDefault()

        createNotes(title, body)
    
    saveNotes()
    renderNotes() // calls render
    e.target.elements.text.value = '' // clears input
    e.target.elements.body.value = '' // clears input
})
