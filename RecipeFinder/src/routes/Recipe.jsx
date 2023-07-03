import { useLoaderData } from "react-router-dom";

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
<h5>a Recipe</h5>
<h1>{name}</h1>

  </>
  )
}

