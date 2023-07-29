import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Root from "./routes/root";
import Home from './routes/home.jsx';
import About from './routes/About.jsx';
import Recipe, {loader as recipeDetailLoader, action as deleteReviewAction} from './routes/recipe.jsx';
import RecipeList, { loader as recipesLoader}  from './RecipeList.jsx';
import AddForm, {action as addFormAction } from './AddForm.jsx';
import EditRecipe, {loader as editrecipeloader, action as editAction} from './routes/editRecipe.jsx';
import AddReview, {action as addreviewAction} from './routes/addReview.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
            errorElement: <ErrorPage />,
    
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
        action: deleteReviewAction,
      },
      {
        path: "recipes/:recipeId/edit",
        element: <EditRecipe />,
        errorElement: <ErrorPage />,
        loader: editrecipeloader,
        action : editAction
    
      }, 
      {
            path:"recipes/:recipeId/addReview",
            element: <AddReview/>,
            action :addreviewAction,
            
      }
      // {
      //   path: "reviews/:reviewId/destroy",
      
      //   action : destroyReviewAction,
      // }

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
