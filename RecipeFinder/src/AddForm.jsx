// Handles form submission

import { useState, useEffect } from 'react'
import { Form, redirect, Link } from "react-router-dom";



export async function action({request, params}){

let formData = await request.formData();
let recipeData = Object.fromEntries(formData);

    const response = await fetch('http://127.0.0.1:3000/recipes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
  
      });
      console.log(response)
return redirect('/');

}

export default function AddForm({onAddForm}){


    return(
<>
<div
className='border-2 rounded flex flex-col m-5 p-10 bg-white bg-opacity-10 border-opacity-5' >

                <Link to = "/home"
                className="text-center border-solid border-indigo-200 border-2 px-2 border-opacity-40 font-serif rounded m-1 bg-indigo-300 bg-opacity-40 "> 
                <button
               // onClick = {hideModal}
               >Close tab</button></Link>
        <Form
        method = "post"
        // onSubmit={handleRecipeFormSubmit}
        >
      
        <fieldset className="flex flex-col">
                  <label htmlFor="title"
                  className='border-4 border-solid border-pink-800 p-1 bg-opacity-50 bg-pink-700'>
                    Recipe Title</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-opacity-50 bg-pink-50 border-4 focus:outline-none p-2"
                  />
        </fieldset>
        <fieldset className="bg-opacity-50 flex flex-col">
                  <label htmlFor="title"
                  className='border-4 border-solid border-pink-900 p-1 bg-opacity-50 bg-pink-900'>
                  Category</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.category}
                    type="text"
                    name="category"
                    id="category"
                    className="bg-opacity-50 bg-pink-50 bg-white border-4 focus:outline-none p-2"
                  />
        </fieldset>
      
        <fieldset className="flex flex-col">
                  <label htmlFor="description"
                  className='border-4 border-solid border-pink-800 p-1 bg-opacity-50 bg-pink-700'>Description</label>
                  <input
                    // onChange={handleformInput}
                    // value={recipeForm.description}
                    type="text"
                    name="description"
                    id="description"
                    className="bg-opacity-50 bg-pink-50 bg-white border-4 focus:outline-none p-2"
                  />
        </fieldset>
      
        
      
      <input
      className="bg-indigo-400 bg-opacity-95 px-2 rounded hover:bg-indigo-600 text-white transition mt-4 py-2 cursor-pointer "
      type = "submit">
      </input>
      
        </Form>
  </div>
</>
    )

}