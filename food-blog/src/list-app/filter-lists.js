import {renderList} from './view'

const filtersList = {
    searchText: '',
    hideCompleted: false
}

// List Page
const getFiltersList = () => filtersList

const setFiltersList = (updates) => {
    if(typeof updates.searchText === 'string') {
        filtersList.searchText = updates.searchText
    }

    if(typeof updates.hideCompleted === 'boolean') {
        filtersList.hideCompleted = updates.hideCompleted
        renderList()
    }
}

export{getFiltersList, setFiltersList}