import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Dosa',
      imageUrl: "https://www.thespruceeats.com/thmb/gwpiDc5y98oumhsMNd2hw7zYn3o=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-dosa-1957716-Hero-5b59e84346e0fb0071e637c5.jpg",
      ingredients: ["3 cups rice", "1 cup urad daal (split, skinless black gram)", "3/4 teaspoon fenugreek seeds", "Salt (to taste)", "Vegetable / canola / sunflower cooking oil"]
    },
    {
      id: '2',
      title: 'Rasgulla',
      imageUrl: "https://www.thespruceeats.com/thmb/Z-j6I8Lmwuzg7QwsowM_agIt-x4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rasgulla-56a5108e5f9b58b7d0dabedc.jpg",
      ingredients: ["8 1/2 cups whole milk", "2 to 3 tablespoons lime juice (or lemon juice)", "5 teaspoons flour", "2 cups sugar", "4 cups water", "2 to 3 tablespoons rose water (or a few strands of saffron)"]
    },
    {
      id: '3',
      title: 'Lemon Rice',
      imageUrl: "https://www.thespruceeats.com/thmb/K4iwGvU-kPvUjOYrVvRhCKoBGAI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/south-indian-lemon-rice-1957723-33_preview-5b0eceb904d1cf00363dbe1d.jpeg",
      ingredients: ["1 teaspoon coriander seeds", "2 tablespoons vegetable oil (or canola or sunflower cooking oil)", "1 teaspoon mustard seeds", "3 to 4 curry leaves", "2 green chilies (slit lengthwise)", "1-inch piece ginger (grated)", "1/2 cup peanuts (roasted and unsalted)", "1 teaspoon turmeric powder", "Juice of 2 lemons", '2 cups cooked basmati rice (or leftover rice)']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    }
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    // console.log(this.recipes);
  }

}
