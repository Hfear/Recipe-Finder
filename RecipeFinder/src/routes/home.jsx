import { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard';
import Modal from '../Modal';
import { Outlet, NavLink, Link } from "react-router-dom";
import Search from '../Search';




const categorys = {
    0 : "clear",
    1 : "cookie",
    2 : "cake",
    3 : "cupcake",
    4 : "pastry",
  };

  export default function Home() {
    const [CurCategory, setCategory] = useState(0);
    const [CurSearch, setSearch] = useState(" "); 
    const[recipes, setrecipes] = useState([]);
    const[filteredR, setfilteredR] = useState([]);

    const [modalVisiblity, setmodalvisibility] = useState(false);
    const [recipeForm, setrecipeForm] = useState({
      // image: {src : "", alt : ""},
      name:"",
      category: "",
      ingredients: "",
      description: "",
    })
  
  
    //loading recipe info from database
   
    // useEffect(() => {
    //   async function fetchRecipes(){
    //     // console.log("fetching recipes");
    //     const response = await fetch("http://localhost:3000/recipes");
    //     const recipes = await response.json();
    //     setrecipes(recipes);
    //   }
    //   fetchRecipes();
    // }, [])



  
  //filtering the list based off of what search was typed
  
  useEffect(() => {
    const RecipesCopy = JSON.parse(JSON.stringify(recipes));
    const searchRecipes = RecipesCopy.filter(recipe => {
  
      const recipeName = recipe.name.toUpperCase();
    const searchQuery = CurSearch.toUpperCase();
    return recipeName.includes(searchQuery);
    } ) 
  
  setfilteredR(searchRecipes);
  
  },[CurSearch]);
  
  //mapping the filtered by search
  const searchedrecipeCards = filteredR.map((recipe,i) =>{
    return <RecipeCard recipe={recipe} key = {i} />
  });
  
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

  
  
     //updating the current recipe view
     const updateCurRecipe = ({recipe}) => {
      setCurrentRecipe({recipe});
     }
    
  
  
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
     const handleRecipeFormSubmit = async (e) => 
     {
      e.preventDefault();
  
      //resetting recipe form to blank slate
      setrecipeForm({
        name:"",
        category: "",
        ingredients: "",
        description: "",
      })

  
      const response = await fetch("http://127.0.0.1:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeForm),
  
      });
      
      console.log('response', response);
      const savedForm = await response.json();
      console.log('saved form', savedForm); 
      setrecipes([
        ...recipes,
         recipeForm
      ])
      hideModal();
  
    }
    
   
  


 return ( 
  <>

 <div >
      <h1 className='topbar-title'>Recipe Finder</h1>
  </div>

  <div>
      <Outlet/>
    </div>
  
  <Search setSearch={setSearch}/>
  
  
  <div className='button-filters m-1'> {buttons} </div>
  
  <div>
    <Link to = "/recipes/new"
    className='border-solid border-indigo-200 border-2 px-2 border-opacity-25 font-serif rounded m-1'
    onClick={showModal}
    >
       + Add Recipe
    </Link>
  </div>
  
    <div className="View-container ">
    


      {/* {AllrecipeCards} */}
      {searchedrecipeCards}
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
                className="bg-pink-50 border-4 focus:outline-none p-2"
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
                className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
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
                className="bg-pink-50 bg-white border-4 focus:outline-none p-2"
              />
    </fieldset>
  
    
  
  <input
  className="bg-indigo-400 bg-opacity-95 px-2 rounded hover:bg-indigo-600 text-white transition mt-4 py-2 cursor-pointer "
  type = "submit">
  </input>
  
    </form>
  
    </Modal>
  
  
  {/* <RecipeView/> */}
  
  
    
  </> 
    )


  }

  
