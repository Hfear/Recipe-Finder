

import RecipeCard from "./RecipeCard"
import recipes from "./recipes";

export default function RecipeView()
{
    const recipeCards = recipes.map((recipe,i) =>{
        return <RecipeCard recipe={recipe} key = {i} />
      });
    
    return (

    <>
    <div className="View-container">

        {recipeCards}
        {recipeCards}

    </div>

   
    </>

    
    )
    
}