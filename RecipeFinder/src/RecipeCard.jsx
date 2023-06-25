// our component of recipe card that will hold the image and tile,, and link a single recipe 


export default function RecipeCard({recipe})
{
    // this is taking in a single object from our js file that is an array which holds all our recipe info/recipe objects 

    const{
        image : {src, alt},
        name,
        category,
        ingredients,
    } = recipe; 

    function handleClick(){
        console.log('clicked');
    }

    return (

        <div className = "r-card" onClick = {handleClick}>
           

            <img className = "r-img" src = {src} alt = {alt} />
            <h4 className="r-name">{name}</h4>
            <h5 className = "r-category">{category}</h5>

        </div>

    );

}