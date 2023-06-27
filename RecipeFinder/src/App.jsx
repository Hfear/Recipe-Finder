import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipes from './recipes'
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

  const [modalVisiblity, setmodalvisibility] = useState(false);


  //catagory selectors that filter list based on selected button 
  const buttons = Object.keys(categorys).map(category => {
    return (
      <button
      key={category}
      onClick= {() => setCategory(parseInt(category))}
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
  className=''
  onClick={showModal}

  > + Add Recipe
  </button>
</div>

  <div className="View-container">

    {FrecipeCards}

  </div>


  <Modal isVisible={modalVisiblity} hideModal ={hideModal}>
  </Modal>

  
</> 
  )
}

export default App
