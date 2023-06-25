import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipes from './recipes'
import Navbar from './navbar'

function App() {
  const [count, setCount] = useState(0)



  return (
  
<>

<Navbar/>

<div >
    <h1 className='topbar-title'>Recipe Finder</h1>
</div>

{/* {recipeCards} */}

    <RecipeView/>
  
</>

   
  
  )
}

export default App
