import { redirect } from "react-router-dom";

export async function action ({params}){
    const response = await fetch (`http://localhost:3000/reviews/${params.reviewId}`,
   {
    method: "DELETE"
})
const recipeId = new URL(request.url).searchParams.get("recipeId");
return redirect(`/recipes/${recipeId}`)
}

