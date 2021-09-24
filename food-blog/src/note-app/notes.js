/*Creates and stores user entered objects into an array that is rendered onto the notes page.
Once ojects are created user can view and edit the object by clicking edit or 
remove objects with the remove button*/

import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
// functions
let notes = []

// loads from JSON
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// save to JSON
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = () => notes

const createNotes = (title, body) => {
    const id = uuidv4();
    const timestamp = moment().valueOf()
    notes.push({
        id: uuidv4(),
        title,
        body,
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
    return id
}

const removeNotes = (id) => {
    const notesIndex = notes.findIndex((note) => note.id === id)

    if (notesIndex > -1) {
        notes.splice(notesIndex, 1)
        saveNotes()
    }
}

const sortNotes = (sortBy) => {
    if (sortBy ==='alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated')  {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0 
            }
        })
    } else {
        return notes
    }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
    return note
}

notes = loadNotes()

export {saveNotes, getNotes, createNotes, removeNotes, sortNotes, updateNote}