import RecipeCard from "./RecipeCard"
import recipes from "./recipes"

export default function RecipeView()
{

    return (

        <>

    <div className="View-container">

        
        <RecipeCard recipe = {recipes[0]}/> 
        <RecipeCard recipe = {recipes[1]}/> 
        <RecipeCard recipe = {recipes[2]}/> 
        
        <RecipeCard recipe = {recipes[0]}/> 
        <RecipeCard recipe = {recipes[1]}/> 
        <RecipeCard recipe = {recipes[2]}/> 
        



    </div>

   
    </>

    
    )
    
}