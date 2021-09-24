
//Data Storage
//Array data
let recipes = [{
    id: '05',
    image: '/images/picklesV3.jpg',
    figcap: 'Pickles in a Jar',
    title: 'Quick Pickles',
    level: 'Level 2',
    para: 'So easy they literaly make themselves.',
    ingredients: '1 lb sliced cucumbers, 3 tbsp kosher salt, 1 tbsp sugar, 2 cups white vingar, 2 cups water',
    directions: 'Toss sliced cucumbers in 2 tbsp salt and refrigerate for 4 hours. Heat vingar, water, sugar, and the remaining 1 tbsp salt in a sauce pan. Let boil for 5 minutes then rest off the heat for 3 minutes. Rinse excess salt from pickles before fill clean glass jars. Pour hot vingar mix into filled jar. Place on lids and let cool before storing in the refrigerator'}, {
    id: '02',
    image: 'images/bread.jpg',
    figcap: 'Loaf of Bread',
    title: 'Bread Loaf',
    level: 'Level 3',
    para: 'Simple and satisfying.',
    ingredients: '542g flour, 11g sugar, 2 tsp yeast, 15g salt, 379g water',
    directions: 'Stir together all of the ingredients in a large bowl with a sturdy spoon until a rough, shaggy mass has formed. Then, turn it out onto a lightly floured surface and knead the dough. When done, the dough will be bouncy and smooth. Next, place the dough in a lightly greased bowl and cover with plastic wrap. Let the dough rise for about 1 to 2 hours before deflating the dough. Then, cut it in half and shape each into a rough oval. Place the loaves, seam-side down, on a baking sheet and let the loaves rise for 45 minutes. Gently poke your index finger into the side of one of the loaves; if the indentation remains, your bread is ready to bake. Preheat the oven to 450 degrees. Then, make three or four deep diagonal slashes in each loaf. Place the bread in the oven and bake the bread for 20 to 25 minutes, until the crust is golden brown and a loaf sounds hollow to the touch when you tap it on the bottom. Remove the bread from the oven and cool it on a rack. Enjoy.'
}, {
    id:'03',
    image: 'images/toastV2.jpg',
    figcap: 'Avocado Toast',
    title: 'Avocado Toast',
    level: 'Level 1',
    para: 'For when you really just cannot cook a meal.',
    ingredients: '1 ripe avocado, 2 slices of bread',
    directions: 'Place toast in toaster. Cut avocado and remove seed. Scoop out the meat with a spoon and smash to desired texture. Spread on warm toast and season with salt and pepper.'
    }]

// loads from JSON
const loadRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')
    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (e) {
        return []
    }
}

// save to JSON
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

saveRecipes()

//Expose items from module
const getRecipes = () => recipes

const sortRecipes = (sortBy) => {
    if (sortBy ==='alphabetical') {
        return recipes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byLevel')  {
        return recipes.sort((a, b) => {
            if (a.level.toLowerCase() < b.level.toLowerCase()) {
                return -1
            } else if (a.level.toLowerCase() > b.level.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        }) 
    }else {
        return recipes
    }
}

recipes = loadRecipes()


export {getRecipes, saveRecipes, sortRecipes}