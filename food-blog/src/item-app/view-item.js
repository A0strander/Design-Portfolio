import {inViewPage} from './views'
import {artIntViewPage} from './article-view'

const itemId = location.hash.substring(1)

//Creates veiwer page
if(itemId.length < 3) {
    inViewPage(itemId)
} 

if (itemId.length > 3) {
    artIntViewPage(itemId)
}

