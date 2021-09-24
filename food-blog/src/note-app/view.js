import moment from 'moment'
import {getFilters} from './filters'
import {getNotes, removeNotes, saveNotes, sortNotes} from './notes'

// view for html

const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const note = sortNotes(filters.sortBy)
    const filteredNotes = note.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())) //
    
    notesEl.innerHTML = ''

        if(filteredNotes.length > 0) {
            filteredNotes.forEach((note) => notesEl.appendChild(generateNotes(note)))
          
        } else {
            const emptyNotes = document.createElement('p')
            emptyNotes.textContent = "You have no notes."
            emptyNotes.classList.add('empty-message')
            notesEl.appendChild(emptyNotes)
        }
    saveNotes()
}

const generateNotes = (note) => {

    const cotainerEl = document.createElement('article')
    const hGroupEl = document.createElement('hgroup')
    const titleEl = document.createElement('h1')
    const bodyEl = document.createElement('h2')
    const button = document.createElement('button')
    const buttonEd = document.createElement('button')

    titleEl.textContent = note.title
    titleEl.classList.add('list-item__title')
    hGroupEl.appendChild(titleEl)

    bodyEl.textContent = note.body
    bodyEl.classList.add('list-item__subtitle')
    hGroupEl.appendChild(bodyEl)

    hGroupEl.classList.add('list-item')
    cotainerEl.appendChild(hGroupEl)

    buttonEd.textContent = 'Edit'
    buttonEd.classList.add('button','button--secondary')
    hGroupEl.appendChild(buttonEd)
    buttonEd.addEventListener('click', () => {
        location.assign(`/edit.html#${note.id}`)
    })

    button.textContent = 'Remove'
    button.classList.add('button','button--secondary')
    hGroupEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNotes(note.id)
        renderNotes()
    })
    
    return cotainerEl
}

const initEdit = (id) => {
    const textElement = document.querySelector('#edit-title')
    const bodyElement = document.querySelector('#edit-body')
    const notes = getNotes()
    const note = notes.find((note) => note.id === id)
    
    

    textElement.value = note.title
    bodyElement.value = note.body
    
}

export {renderNotes, initEdit}