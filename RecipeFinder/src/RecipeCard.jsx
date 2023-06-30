// our component of recipe card that will hold the image and tile,, and link a single recipe 

import CurRecipe from "./CurRecipe";



export default function RecipeCard({recipe, updateCurRecipe})
{
    // this is taking in a single object from our js file that is an array which holds all our recipe info/recipe objects 

    const{
        image,
        name,
        category,
        ingredients,
        description,
    } = recipe; 

    function handleClick(){
        updateCurRecipe (recipe = {recipe});
    }

    return (

        <div className = "r-card" onClick = {handleClick}>
           

            {/* <img className = "r-img" src = {src} alt = {alt} /> */}
            {image ? <img className = "r-img" src={image.src} alt={image.alt} /> : <img className = "r-img" src="https://placehold.co/100x100" alt="No company logo available" />}
            <h4 className="r-name">{name}</h4>
            <h5 className = "r-category">{category}</h5>

        </div>

    );

}