import { Link, useLoaderData, Form, useFetcher } from "react-router-dom";
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

export async function action({ request, params }) {
  const formData = await request.formData();
  if (formData.get("action") === "deleteNote") {
    const response = await fetch(`http://localhost:3000/reviews/${formData.get("reviewId")}`, { method: "DELETE" })
    return { ok: true };
  }

  
}

export default function Recipe(){

  const { recipe, reviews } = useLoaderData();
  const fetcher = useFetcher();

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

      <fetcher.Form
       method="post"
       onSubmit={(event) => {
         if (!confirm("Please confirm you want to delete this review.")) {
           event.preventDefault();
         }
       }}
      >

    <input type="hidden" name="action" value="deleteNote" />
    <input type="hidden" name="reviewId" value={review.id} />
      <button> <FaRegTrashAlt/></button>

      </fetcher.Form>
      
      </div>
     
    </>
  )
})

return (
<>
<Link to={"/home"}> {'<'} Back </Link>
<h1>{name}</h1>

<Link to = {`/recipes/${id}/edit`}
className="gap-2 p-2 m-1">
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

