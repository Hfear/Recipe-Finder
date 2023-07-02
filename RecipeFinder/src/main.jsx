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
import Recipe from './routes/recipe.jsx';
import RecipeList, { loader as recipesLoader}  from './RecipeList.jsx';



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
        ],

      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,

      },

    ]

  },
  {
    path: "Recipes/ : recipeId",
    element: <Recipe/>,
    errorElement: <ErrorPage/>,
  }
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
