/*Push selected items from the recipe array onto the saved array then render the new list on the saved page*/

let saved = []

const loadSaved = () => {
    const savedJSON = localStorage.getItem('saved')
    try {
        return savedJSON ? JSON.parse(savedJSON) : []
    } catch (e) {
        return []
    }   
}

const savedItems = () => {
    localStorage.setItem('saved', JSON.stringify(saved))
}

const getSaved = () => saved

const createSaved = (id) => {
    let checkSaved = []
    checkSaved = !saved.find((item) => item.id === id)

if(checkSaved) {
        saved.push({
            id: id, // store selected id in saved array 
        })
        savedItems()
        return id
    }
    
}

const removeSaved = (id) => {
    const savedIndex = saved.findIndex((item) => item.id === id)

    if (savedIndex > -1) {
        saved.splice(savedIndex, 1)
        savedItems()
    }
}

saved = loadSaved()

export {getSaved, savedItems, createSaved, removeSaved}