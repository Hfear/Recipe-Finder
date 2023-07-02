import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";


export async function loader() {
    const response = await fetch("http://localhost:3000/recipes"); 
  const recipes = await response.json(); 
  return { recipes };
}

export default function RecipeList(){

    const {recipes} = useLoaderData();

    const filteredRecipes = recipes.filter((Recipe) => true);

    const recipeCards = filteredRecipes.map((recipe) => {
        return <RecipeCard recipe = {recipe} key = {recipe.id} />;
    });

    return(
        <>
        <div className="View-container ">
            {recipeCards}
        </div>
        
        </>
    )
}