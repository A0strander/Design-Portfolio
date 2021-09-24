import { v4 as uuidv4 } from 'uuid'

// Functions
let list = []

// loads from JSON
const loadList = () => {
    const listJSON = localStorage.getItem('list')
    try {
        return listJSON ? JSON.parse(listJSON) : []
    } catch (e) {
        return []
    }
}

// save to JSON
const saveList = () => {
    localStorage.setItem('list', JSON.stringify(list))
}


const getList = () => list

const createList = (title) => {
    const id = uuidv4();
    list.push({
        id: uuidv4(),
        title,
        completed: false
    })
    saveList()
}

const removeList = (id) => {
    const listIndex = list.findIndex((item) => item.id === id)

    if (listIndex > -1) {
        list.splice(listIndex, 1)
        saveList()
    }
}

const toggleList = (id) => {
    const item = list.find((item) => item.id === id)

    if (item) {
        item.completed = !item.completed
    }
}


list = loadList()


export {getList, removeList, toggleList, createList, saveList}