import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipesData from './recipes'
import Navbar from './navbar'
import CurRecipe from './CurRecipe'
import Modal from './Modal'

 const categorys = {
    
    1 : "cookie",
    2 : "cake",
    3 : "cupcake",
    4 : "pastry",
  };


function App() {

  const [CurCategory, setCategory] = useState(1)

  const[recipes, setrecipes] = useState(recipesData)
  const [modalVisiblity, setmodalvisibility] = useState(false);
  const [recipeForm, setrecipeForm] = useState({
    // image: {src : "", alt : ""},
    name:"",
    category: "",
    ingredients: "",
    description: "",
  })


  //catagory selectors that filter list based on selected button 
  const buttons = Object.keys(categorys).map(category => {
    return (
      <button
      key={category}
      onClick= {() => setCategory(parseInt(category))}
      className='button-categorys'
      >
        {categorys[category]}
      </button>
    );
  });


   //filtering the list based off of what was clicked
   const filteredRecipes = recipes.filter(recipe => recipe.category === categorys[CurCategory] )
  
   //the filtered list of recipe previews
   const FrecipeCards = filteredRecipes.map((recipe,i) =>{
     return <RecipeCard recipe={recipe} key = {i} />
   });

   //Modal Visibility functions
   const showModal = () => {
    setmodalvisibility(true);
   }
   const hideModal = () => {
    setmodalvisibility(false);
   }

   const handleformInput = (e) => {
    console.log(e.target.name, e.target.value);

    //spreading an objects properties
      setrecipeForm(recipeForm => {
          return{
            ...recipeForm,
            [e.target.name]: e.target.value
          }
      });
   }

   //spreading an array of objects
   const handleRecipeFormSubmit = (e) => {
    e.preventDefault();

    //resetting recipe form to blank slate
    setrecipeForm({
      name:"",
      category: "",
      ingredients: "",
      description: "",
    })

    setrecipes([
      ...recipes,
      recipeForm
    ])
    
  }
  


 return ( 
<>

<Navbar/>

<div >
    <h1 className='topbar-title'>Recipe Finder</h1>
</div>

<CurRecipe recipe={recipes[0]}/>


<form class="flex">
  <label for="default-search" class="sr-only">Search</label>
  <div class="relative flex-grow">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input type="text" id="default-search" 
  onChange={(entered) => setCategory(Object.keys(categorys).find((key) => categorys[key] === entered.target.value))}
  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search dessert type..." required />
  </div>
  <button type="submit"
   className ="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-900 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
</form>


<div className='button-filters'> {buttons} </div>

<div>
  <button
  className='border-solid border-indigo-200 border-2 px-2 border-opacity-25 font-serif rounded'
  onClick={showModal}

  > + Add Recipe
  </button>
</div>

  <div className="View-container ">

    {FrecipeCards}

  </div>


  <Modal isVisible={modalVisiblity} hideModal ={hideModal}>
  <form
  onSubmit={handleRecipeFormSubmit}>

  <fieldset className="flex flex-col">
            <label htmlFor="title">Recipe Title</label>
            <input
              onChange={handleformInput}
              value={recipeForm.name}
              type="text"
              name="name"
              id="name"
              className="bg-white border-4 focus:outline-none p-2"
            />
  </fieldset>
  <fieldset className="flex flex-col">
            <label htmlFor="title">Category</label>
            <input
              onChange={handleformInput}
              value={recipeForm.category}
              type="text"
              name="category"
              id="category"
              className="bg-white border-4 focus:outline-none p-2"
            />
  </fieldset>

  <fieldset className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              onChange={handleformInput}
              value={recipeForm.description}
              type="text"
              name="description"
              id="description"
              className="bg-white border-4 focus:outline-none p-2"
            />
  </fieldset>

<input
className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
type = "submit">
</input>

  </form>

  </Modal>


<RecipeView/>
  
</> 
  )
}

export default App
