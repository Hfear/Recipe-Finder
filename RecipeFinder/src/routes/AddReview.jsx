import { Form, useLoaderData, Link, redirect } from "react-router-dom";
import { useState } from "react";

//const[recipeId, setId] = useState("");

export async function action({request, params}){
    let formData = await request.formData();
let reviewData = Object.fromEntries(formData);

const recipeId = new URL(request.url).searchParams.get("recipeId");
console.log("id = ", {recipeId});
reviewData.recipeId = recipeId; 

    const response = await fetch('http://127.0.0.1:3000/reviews', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
  
      });
      console.log(response)

      
      return redirect(`/recipes/${recipeId}`)
}

export default function AddReview(){

    return(
        <>
        <Form
        method = "post">

<fieldset 
className="flex flex-col ">
    <label htmlFor="username">Your Name</label>
    <input
    type="text"
    name="username"
    id="username"
    className="bg-green-600 border-4 focus:outline-none p-2"
    />
</fieldset>
<fieldset 
className="flex flex-col">
    <label htmlFor="review"> Write your review</label>
    <input
    type="text"
    name="review"
    id="review"
    className="bg-green-600 border-4 focus:outline-none p-2"
    />
</fieldset>


<input
    className="bg-pink-400 bg-opacity-95 px-2 rounded hover:bg-indigo-600 text-white transition mt-4 py-2 cursor-pointer "
    type = "submit">
    </input>


        </Form>
        </>
    )
}