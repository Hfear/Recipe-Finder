import { Link, useLoaderData, Form} from "react-router-dom";
import { FaPenAlt, FaRegTrashAlt} from "react-icons/fa";

// import{categorybyId} from "../utils"


export async function loader({params}){
  const response = await fetch(`http://localhost:3000/recipes/${params.recipeId}`);
  const recipe = await response.json();

  const reviewsResponse = await fetch(`http://localhost:3000/reviews?recipeId=${params.recipeId}`);
  const reviews = await reviewsResponse.json();
  console.log(reviews)

  return {recipe, reviews};
}

export default function Recipe(){

  const { recipe, reviews } = useLoaderData();

  const{
    id,
    image,
    name,
    category,
    ingredients,
    description,
} = recipe; 

const mappedReviews = reviews.map((review) => {
  return(
    <>
    <div
    className="flex gap-4 border border-solid border-pink-900 m-3">
      <div
      className="" > 
      {review.username} - </div>
      <div> 
      "{review.review}" </div>

      <Form
       method="post"
       action={`/reviews${recipe.id}/destroy?recipebId=${id}`}
       onSubmit={(event) => {
         if (!confirm("Please confirm you want to delete this review.")) {
           event.preventDefault();
         }
       }}
      >
      <button> <FaRegTrashAlt/></button>
      </Form>
      
      </div>
     
    </>
  )
})

return (
<>
<Link to={"/home"}> {'<'} Back </Link>
<h1>{name}</h1>

<Link to = {`/recipes/${id}/edit`}
className="gap-2 p-20 m-1">
<FaPenAlt />
</Link>

{image ? <img className = "r-img" src={image.src} alt={image.alt} /> : <img className = "r-img" src="https://placehold.co/100x100" alt="No company logo available" />}
<h5 className = "r-category">{category}</h5>
<h4>{ingredients}</h4>
<h2> {description}</h2>

<div> {mappedReviews}</div>
  </>
  )
}

