import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipes from './recipes'
import Navbar from './navbar'
import CurRecipe from './CurRecipe'

 const categorys = {
    1 : "cookie",
    2 : "cake",
    3 : "cupcake",
    4 : "pastry",
  };

function App() {

  const [CurCategory, setCategory] = useState(0)


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
  


 return ( 
<>

<Navbar/>

<div >
    <h1 className='topbar-title'>Recipe Finder</h1>
</div>

<CurRecipe recipe={recipes[0]}/>

{buttons}


  <div className="View-container">

    {FrecipeCards}

  </div>

    {/* <RecipeView/> */}
  
</> 
  )
}

export default App
