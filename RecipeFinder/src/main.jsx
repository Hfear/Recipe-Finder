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
      }

    ]

  },
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
