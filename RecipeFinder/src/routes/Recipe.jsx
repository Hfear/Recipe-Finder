import { Link, useLoaderData } from "react-router-dom";


export async function loader({params}){
  const response = await fetch(`http://localhost:3000/recipes/${params.recipeId}`);
  const recipe = await response.json();
  return {recipe};
}

export default function Recipe(){

  const { recipe } = useLoaderData();

  const{
    id,
    image,
    name,
    category,
    ingredients,
    description,
} = recipe; 

return (
  <>
        <Link to="/home">{'<'} Back</Link>
<h1>{name}</h1>
{image ? <img className = "r-img" src={image.src} alt={image.alt} /> : <img className = "r-img" src="https://placehold.co/100x100" alt="No company logo available" />}
<h5 className = "r-category">{category}</h5>
<h4>{ingredients}</h4>
<h2>{description}</h2>


  </>
  )
}

