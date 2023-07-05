import { Form, useLoaderData, Link } from "react-router-dom";
import { categorybyId } from "../utils";

export async function loader({ params }) {
    const recipeResponse = await fetch(`http://localhost:3000/recipes/${params.recipeId}`);
    const recipe = await recipeResponse.json();
    return { recipe };
  }

  export default function editRecipe(){
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

    <fieldset className="flex flex-col">
            <label htmlFor="title">Recipe Title</label>
            <input
                type="text"
                name="name"
                id="name"
                className="bg-pink-50 border-4 focus:outline-none p-2"
                defaultValue={recipe.name}
            />
    </fieldset>
    <fieldset className="flex flex-col">
            <label htmlFor="title">Category</label>
            <input
                type="text"
                name="category"
                id="category"
                className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
                defaultValue={recipe.category}

            />
    </fieldset>

    <fieldset className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
                defaultValue={recipe.description}

            />
    </fieldset>



    <input
    className="bg-indigo-400 bg-opacity-95 px-2 rounded hover:bg-indigo-600 text-white transition mt-4 py-2 cursor-pointer "
    type = "submit">
    </input>

    </Form>
    </>
      )


  }