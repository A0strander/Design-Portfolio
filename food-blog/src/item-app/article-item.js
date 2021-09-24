
import moment from 'moment'

//using moment to mimic created dates
const testDate = (datestamp) => moment(datestamp).format('MMM D, YYYY')

let article = [{
    id: '0100',
    image: 'images/kitchentools.jpg',
    figcap: 'Kitchen Utensils',
    title: 'Summer Must Have Tools.',
    date: testDate(1623000096080),
    subPara: 'Welcome the warmer weather with this year s hit kitchen gear.',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
    id: '0101',
    image: 'images/grilling.jpg',
    figcap: 'Food on a Grill',
    title: 'Grilling for Eveyone.',
    date: testDate(1626090002100),
    subPara: 'The top tips for mastering your next outdoor bbq.',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
    id: '0102',
    image: 'images/fastfood.jpg',
    figcap: 'Shakshuka',
    title: 'Quick Healthy Weeknight Meal Plan',
    date: testDate(1630200096286),
    subPara: 'Make a wholesome dinner in 16 minutes or less with these easy steps.',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
]

// loads from JSON
const loadArticle = () => {
    const articleJSON = localStorage.getItem('article')
    try {
        return articleJSON ? JSON.parse(articleJSON) : []
    } catch (e) {
        return []
    }
}

// save to JSON
const saveArticle = () => {
    localStorage.setItem('article', JSON.stringify(article))
}

saveArticle()

//Expose items from module
const getArticle = () => article

const sortArticles = (sortBy) => {
    if (sortBy ==='alphabetical') {
        return article.sort((a, b) => {
           if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated')  {
        return article.sort((a, b) => {
            if (a.date < b.date) {
                return -1
            } else if (a.date > b.date) {
                return 1
            } else {
                return 0
            }
        })
    }else {
        return article
    }
}


article = loadArticle()

export {getArticle, saveArticle, sortArticles}