import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from 'react'
import Search from "./Search";



export async function loader() {
  const response = await fetch("http://localhost:3000/recipes"); 
  const recipes = await response.json(); 
  return { recipes };
}

export default function RecipeList(){

    const [CurSearch, setSearch] = useState(""); // text in search bar
    const[searchedR, setsearchedR] = useState([]); //recipes that match search
    
  

   //updates current searches each time something is typed 
  useEffect(() => {
    const RecipesCopy = JSON.parse(JSON.stringify(recipes));

    const searchRecipes = RecipesCopy.filter(recipe => {
    const recipeName = recipe.name.toUpperCase();
    const searchQuery = CurSearch.toUpperCase();
    return recipeName.includes(searchQuery);
    } ) 
   setsearchedR(searchRecipes);
  
  },[CurSearch]);

    //mapping the filtered by search
    const searchedRecipeMap = searchedR.map((recipe,i) =>{
        return <RecipeCard recipe={recipe} key = {i} />
      });


 
    const {recipes} = useLoaderData();


    const filteredRecipes = recipes.filter((Recipe) => true);

    const recipeCards = filteredRecipes.map((recipe) => {
        return <RecipeCard recipe = {recipe} key = {recipe.id} />;
    });

    return(
        <>
        <Search setSearch={setSearch}/>

        <div className="View-container ">
            {searchedRecipeMap}
        </div>
        
        </>
    )
}