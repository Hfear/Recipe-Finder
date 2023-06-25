import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipes from './recipes'
import Navbar from './navbar'
import CurRecipe from './CurRecipe'

function App() {
  const [count, setCount] = useState(0)



  return (
  
<>

<Navbar/>

<div >
    <h1 className='topbar-title'>Recipe Finder</h1>
</div>

<CurRecipe recipe={recipes[0]}/>

{/* {recipeCards} */}

    <RecipeView/>
  
</>

   
  
  )
}

export default App
