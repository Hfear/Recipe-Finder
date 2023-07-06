import { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard';
import Modal from '../Modal';
import { Outlet, NavLink, Link } from "react-router-dom";
import Search from '../Search';
import AddForm from '../AddForm';


const categorys = {
    0 : "clear",
    1 : "cookie",
    2 : "cake",
    3 : "cupcake",
    4 : "pastry",
  };

  export default function Home() {
    const [CurCategory, setCategory] = useState(0);
    const[recipes, setrecipes] = useState([]);
    
    const[filteredR, setfilteredR] = useState([]); // set as recipes

    const [modalVisiblity, setmodalvisibility] = useState(false);
    const [recipeForm, setrecipeForm] = useState({
      // image: {src : "", alt : ""},
      name:"",
      category: "",
      ingredients: "",
      description: "",
    })
  
    
    //catagory selectors that filter list based on selected button 
    const buttons = Object.keys(categorys).map(categoryId => {
      return (
        <div className='button-filters m-1'>
        <NavLink
        to = {'/recipes/byCategory/${categorys[categoryId]'}
        key={categoryId}
        onClick= {() => setCategory(parseInt(categoryId))}
        className='button-categorys'
        >
          {categorys[categoryId]}
        </NavLink>
        </div>
      );
    });
  
     //filtering the list based off of what category was clicked
     const filteredRecipes = recipes.filter(recipe => recipe.category === categorys[CurCategory] )
    
     //the filtered list of recipe previews based on category
     const FrecipeCards = filteredRecipes.map((recipe,i) =>{
       return <RecipeCard recipe={recipe} key = {i} />
     });

     const AllrecipeCards = recipes.map((recipe,i) =>{
        return <RecipeCard recipe={recipe} key = {i} />
      });    
  
  
     //Modal Visibility functions
     const showModal = () => {
      setmodalvisibility(true);
     }
     const hideModal = () => {
      setmodalvisibility(false);
     }
  
    //  const handleformInput = (e) => {
    //   console.log(e.target.name, e.target.value);
  
    //   //spreading an objects properties
    //     setrecipeForm(recipeForm => {
    //         return{
    //           ...recipeForm,
    //           [e.target.name]: e.target.value
    //         }
    //     });
    //  }
  

      //NEW ON ADD FORM****************
      const onAddForm = (newRecipe) => {
        hideModal();
        setrecipes([
          ...recipes,
           recipeForm
        ])

      }
  


 return ( 
  <>

 <div >
      <h1 className='topbar-title'>Recipe Finder</h1>
  </div>

  
  
  <div className='button-filters m-1'> {buttons} </div>
  
  <div>
   
    <Link to = "/home/recipes/new" 
    className='border-solid border-indigo-200 border-2 px-2 border-opacity-25 font-serif rounded m-1'
    //onClick={showModal}
    >
       + Add Recipe
    </Link>
  </div>
  

  
    <Modal isVisible={modalVisiblity} hideModal ={hideModal}>

      <AddForm onAddForm = {onAddForm}/>

    </Modal>

<div>
<Outlet/>
</div>
  
  
  
  
    
  </> 
    )


  }

  
