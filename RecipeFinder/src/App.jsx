import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeView from './RecipeView'
import RecipeCard from './RecipeCard'
import recipes from './recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
  
<>
<div className='topbar'>
    <h1 className='topbar-title'>Recipe Finder</h1>
</div>
    <RecipeView/>
    
  
</>

   
  
  )
}

export default App
