import RecipeCard from "./RecipeCard"
import recipes from "./recipes"

export default function CurRecipe({recipe}){

    const{
        image : {src, alt},
        name,
        category,
        ingredients,
    } = recipe;

    return (

        <div className="cur-recipe">
            <h3 className="tracking-wide underline"> Current Recipe: {name} </h3>

            <div className="cur-items">
            <img className = "cur-img" src={src} alt={alt}/>
            <p className="justify-self-center">{ingredients}</p>
            </div>

        </div>


    )


}