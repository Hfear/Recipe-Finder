import RecipeCard from "./RecipeCard"
import recipes from "./recipes"

export default function CurRecipe({recipe}){

    const{
        image,
        name,
        category,
        ingredients,
        description,
    } = recipe; 

    return (

        <div className="cur-recipe">
            <h3 className="tracking-wide underline p-2 "> Current Recipe: {name} </h3>

            <div className="cur-items">
            {/* {image ? <img className = "r-img" src={image.src} alt={image.alt} /> : <img className = "r-img" src="https://placehold.co/100x100" alt="No company logo available" />} */}

                <div className="flex-col">
                <h5 className="text-left">Ingredients:</h5>
                <p> {ingredients}</p>
                <h5 className="text-left">Description:</h5>
                <p> {description}</p>
                </div>

            </div>

        </div>


    )


}