import RecipeCard from "./RecipeCard"
import recipes from "./recipes"

export default function CurRecipe({recipe}){

    const{
        image : {src, alt},
        name,
        category,
        ingredients,
        description,
    } = recipe;

    return (

        <div className="cur-recipe">
            <h3 className="tracking-wide underline p-2 "> Current Recipe: {name} </h3>

            <div className="cur-items">
            <img className = "cur-img" src={src} alt={alt}/>

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