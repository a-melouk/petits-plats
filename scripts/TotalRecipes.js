import recipes from '../data/recipes.mjs'

export function updateTotalRecipes(recipes) {
  const totalRecipes = document.querySelector('.total')
  if (recipes.length > 1) totalRecipes.innerHTML = `${recipes.length} recettes`
  else if (recipes.length === 1) totalRecipes.innerHTML = `${recipes.length} recette`
  else if (recipes.length === 0) totalRecipes.innerHTML = `Aucune recette trouvée`
}

updateTotalRecipes(recipes)
