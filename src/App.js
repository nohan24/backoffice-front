import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Element from './pages/Element'
import Marque from "./components/Marque";
import Categorie from "./components/Categorie"
import Annonce from "./pages/Annonce";
import Modele from "./components/Modele";
import Carburant from "./components/Carburant";
import Equipement from "./components/Equipement";
import Transmission from "./components/Transmission";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/myCar/dashboard"/>,
      exact: true
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/myCar',
      element: <Header/>,
      children: [
        {
          path: '/myCar/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/myCar/elements',
          element: <Element/>,
          children: [
            {
              path: '/myCar/elements/marque',
              element: <Marque/>,
            },
            {
              path: '/myCar/elements/categorie',
              element: <Categorie/>,
            },
            {
              path: '/myCar/elements/modele',
              element: <Modele/>,
            },
            {
              path: '/myCar/elements/carburant',
              element: <Carburant/>,
            },
            {
              path: '/myCar/elements/equipement',
              element: <Equipement/>,
            },
            {
              path: '/myCar/elements/transmission',
              element: <Transmission/>,
            },
          ]
        },
        {
          path: '/myCar/annonces-en-attente',
          element: <Annonce/>
        }
      ],

    },

  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;