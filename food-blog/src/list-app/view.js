import {getFiltersList} from './filter-lists'
import {getList, saveList, toggleList, removeList} from './list'

// view for html

const renderList = () => {
    const listEl = document.querySelector('#playground')
    const filters = getFiltersList()
    const list = getList()
    const filteredList = list.filter((item) => {
        const searchMatch = item.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompMatch = !filters.hideCompleted || !item.completed
        
        return searchMatch && hideCompMatch
    })

    const incompleteItems = filteredList.filter((item) => !item.completed)
    
    listEl.innerHTML = ''
    listEl.appendChild(generateSummary(incompleteItems))

        if(filteredList.length > 0) {
            filteredList.forEach((item) => listEl.appendChild(generateList(item)))
        } else {
            const emptyList = document.createElement('p')
            emptyList.textContent = "There are no items on your list."
            emptyList.classList.add('empty-message')
            listEl.appendChild(emptyList)
        }
    saveList()
}

const generateList = (item) => {
    const listEl = document.createElement('label')
    const cotainerEl = document.createElement('hgroup')
    const titleEl = document.createElement('span')
    const box = document.createElement('input')
    const button = document.createElement('button')

    box.setAttribute('type', 'checkbox')
    box.classList.add('checkbox')
    box.checked = item.completed
    box.addEventListener('change', () => {
        toggleList(item.id)
        renderList()
    })
    cotainerEl.appendChild(box)
    titleEl.classList.add('list-item__title')
    titleEl.textContent = item.title
    cotainerEl.appendChild(titleEl)

    cotainerEl.classList.add('list-item')
    listEl.appendChild(cotainerEl)

    button.textContent = 'Remove'
    button.classList.add('button--secondary', 'button--text')
    cotainerEl.appendChild(button)
    button.addEventListener('click', () => {
        removeList(item.id)
        renderList()
    })
    
    return listEl

}

const generateSummary = (incompleteItems) => {
    const taskSummary = document.createElement('h2')
    const plural = incompleteItems.length === 1 ? '' : 's'
    taskSummary.textContent = `You have collected ${incompleteItems.length} item${plural} on your list.`
    taskSummary.classList.add('incomplete-list__title')
    return taskSummary
}

export {renderList}