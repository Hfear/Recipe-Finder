import { Link, useLoaderData, Form, useFetcher, Outlet } from "react-router-dom";
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

//   const response = await fetch('http://127.0.0.1:3000/reviews', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(recipeData),
  
//       });
//       console.log(response)
// return redirect('/home');


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
<Link to={"/"}> {'<'} Back </Link>


<div
className="flex flex-col p-20 bg-pink-100 bg-opacity-10 m-10 ">

  <div className="flex flex-col items-center">

 <div className="flex items-center">
  <h1 className="mr-2">{name}</h1>

<Link to = {`/recipes/${id}/edit`} className="px-2 ">
<FaPenAlt size={20} />
</Link>
</div>

</div>
  
<div className="flex flex-col items-center">
{image ? <img className = "r-clicked-img " src={image.src} alt={image.alt} /> 
: <img className = "r-clicked-img" src="https://placehold.co/100x100" alt="No company logo available" />}

<h5 className = "r-category ">{category}</h5>
<h4>{ingredients}</h4>
<h2> {description}</h2>
</div>

</div>

 <Link to  = {`/recipes/recipeId=${id}/addReview`}>
<button>+ Review</button>
</Link> 

<Outlet/>

<div> {mappedReviews}</div>
  </>
  )
}

