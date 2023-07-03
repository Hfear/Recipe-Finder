// Handles form submission

import { useState, useEffect } from 'react'
import { Form, redirect } from "react-router-dom";



export async function action({request, params}){

let formData = await request.formData();
let recipeData = Object.fromEntries(formData);

    const response = await fetch("http://127.0.0.1:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeForm),
  
      });
      console.log(response)
return redirect('/');

}

export default function AddForm({onAddForm}){

// const [recipeForm, setrecipeForm] = useState({
//     // image: {src : "", alt : ""},
//     name:"",
//     category: "",
//     ingredients: "",
//     description: "",
//   })

//   const handleformInput = (e) => {
//     console.log(e.target.name, e.target.value);

//     //spreading an objects properties
//       setrecipeForm(recipeForm => {
//           return{
//             ...recipeForm,
//             [e.target.name]: e.target.value
//           }
//       });
//    }

//    //spreading an array of objects
//    const handleRecipeFormSubmit = async (e) => 
//    {
//     e.preventDefault();

//     //resetting recipe form to blank slate
//     setrecipeForm({
//       name:"",
//       category: "",
//       ingredients: "",
//       description: "",
//     })

//     const response = await fetch("http://127.0.0.1:3000/recipes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(recipeForm),
  
//       });
      
//       console.log('response', response);
//       const savedForm = await response.json();
//       console.log('saved form', savedForm); 

//       onAddForm(savedForm);
//     }

    return(
<>

        <Form
        method = "post"
        // onSubmit={handleRecipeFormSubmit}
        >
      
        <fieldset className="flex flex-col">
                  <label htmlFor="title">Recipe Title</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-pink-50 border-4 focus:outline-none p-2"
                  />
        </fieldset>
        <fieldset className="flex flex-col">
                  <label htmlFor="title">Category</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.category}
                    type="text"
                    name="category"
                    id="category"
                    className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
                  />
        </fieldset>
      
        <fieldset className="flex flex-col">
                  <label htmlFor="description">Description</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.description}
                    type="text"
                    name="description"
                    id="description"
                    className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
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