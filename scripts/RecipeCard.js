/* import recipes from '../data/recipes.mjs'
sessionStorage.setItem('recipes', JSON.stringify([recipes]))
sessionStorage.setItem('history', JSON.stringify([recipes]))
sessionStorage.setItem('searchBar', JSON.stringify([recipes]))
sessionStorage.setItem('tags', JSON.stringify({ ingredients: [], appliances: [], ustensils: [] })) */

export function generateRecipeCard(recipes) {
  const recipesContainer = document.querySelector('.recipes-container');
  recipesContainer.innerHTML = '';
  recipes.map(recipe => {
    const recipeCard = document.createElement('article');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <p class='recipe-time'>${recipe.time} min</p>
      <img class="recipe-image" src="./assets/petits-plats-photos/${recipe.image}" alt="${recipe.image}">
      <h4 class='plate-name'>${recipe.name}</h4>
      <section class='recipe-container'>
        <h5>Recette</h5>
        <p class='recipe-description'>${recipe.description}</p>
      </section>
      <section class='ingredients-container'>
        <h5>Ingrédients</h5>
        <ul class='ingredients'>
        ${recipe.ingredients
          .map(ingredient => {
            //Check if ingredient quantity has a unit
            let unit = ingredient.unit ? `${ingredient.unit}` : '';
            //Check if ingredient has a quantity
            let quantity = ingredient.quantity ? `<p class='ingredient-quantity'>${ingredient.quantity} ${unit}</p>` : '';
            return `<li class='ingredient'><p class='ingredient-name'>${ingredient.ingredient} ${quantity}</p> </li>`;
          })
          .join('')}
        </ul>
      </section>`;
    recipesContainer.appendChild(recipeCard);
  });
}
