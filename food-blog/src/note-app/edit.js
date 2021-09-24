import {updateNote} from './notes'
import {initEdit} from './view'

const textElement = document.querySelector('#edit-title')
const bodyElement = document.querySelector('#edit-body')
const buttonEd = document.querySelector('#edit-note')
let noteId = location.hash.substring(1)

initEdit(noteId)

textElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })

})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    
})

buttonEd.addEventListener('click', (e) => {
    location.assign('notes.html')
})