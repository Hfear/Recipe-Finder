import { Form, useLoaderData, Link, redirect } from "react-router-dom";
import { categorybyId } from "../utils";

export async function loader({ params }) {
    const recipeResponse = await fetch(`http://localhost:3000/recipes/${params.recipeId}`);
    console.log(recipeResponse);
    const recipe = await recipeResponse.json();
    console.log(recipe);
    return { recipe };
  }

  export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    
    const response = await fetch(`http://localhost:3000/recipes/${params.recipeId}`, { 
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  })
  
  return redirect(`/jobs/${params.recipeId}`)
}
  

 

  export default function EditRecipe(){
    const {recipe} = useLoaderData();

    const categoryOptions = Object.keys(categorybyId).map((id) => {
        return (
          <option key={id} value={id}>
            {categorybyId[id]}
          </option>
        );
      });

    return(
    <>

    <Form>

    <fieldset className="flex flex-col gap-4 m-2 items-center">
            <label htmlFor="title">Recipe Title</label>
            <input
                type="text"
                name="name"
                id="name"
                className="bg-pink-900 border-4 focus:outline-none p-2 w-full "
                defaultValue={recipe.name}
            />
    </fieldset>
    <fieldset className="flex flex-col gap-4 m-2 items-center">
            <label htmlFor="title">Category</label>
            <input
                type="text"
                name="category"
                id="category"
                className="bg-pink-950 bg-white border-4 focus:outline-none p-2 w-full"
                defaultValue={recipe.category}

            />
    </fieldset>

    <fieldset className="flex flex-col gap-4 m-2 items-center">
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                className="bg-pink-800 bg-white border-4 focus:outline-none p-2 w-full"
                defaultValue={recipe.description}

            />
    </fieldset>


    <div
    className="flex flex-col gap-4 m-2 items-center">

     <input
    className="bg-pink-400 bg-opacity-95 px-2 rounded hover:bg-indigo-600 text-white transition mt-4 py-2 cursor-pointer "
    type = "submit">
    </input>

    </div>
   

    </Form>
    </>
      )


  }