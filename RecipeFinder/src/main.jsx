import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Root from "./routes/root";
import Home from './routes/home.jsx';
import About from './routes/About.jsx';
import Recipe, {loader as recipeDetailLoader} from './routes/recipe.jsx';
import RecipeList, { loader as recipesLoader}  from './RecipeList.jsx';
import AddForm, {action as addFormAction } from './AddForm.jsx';
// import editRecipe, {loader as editrecipeloader} from './routes/editRecipe.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,

        children: [
          {
          path: "",
          element: <RecipeList/>,
          loader: recipesLoader
          },
          {
            path: "recipes/new",
            element: <AddForm />,
            action : addFormAction,
            // errorElement: <ErrorPage />,
    
          },
         
        ],

      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,

      },
      {
        path: "recipes/:recipeId",
        element: <Recipe />,
        errorElement: <ErrorPage />,
        loader: recipeDetailLoader,
      },
      // {
      //   path: "recipes/:recipeId/edit",
      //   element: <editRecipe />,
      //   errorElement: <ErrorPage />,
      //   loader: editrecipeloader,
    
      // },

      // {
      //   path: "/recipes/new",
      //   element: <AddForm />,
      //   action : addFormAction,
      //   // errorElement: <ErrorPage />,

      // },
     

    ]

  },
  // {
  //   path: "Recipes/:recipeId",
  //   element: <Recipe/>,
  //   errorElement: <ErrorPage/>,
  // }
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
