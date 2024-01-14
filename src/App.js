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
import Commission from "./pages/Commission";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home/dashboard"/>,
      exact: true
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/home',
      element: <Header/>,
      children: [
        {
          path: '/home/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/home/elements',
          element: <Element/>,
          children: [
            {
              path: '/home/elements/marque',
              element: <Marque/>,
            },
            {
              path: '/home/elements/categorie',
              element: <Categorie/>,
            },
            {
              path: '/home/elements/modele',
              element: <Modele/>,
            },
            {
              path: '/home/elements/carburant',
              element: <Carburant/>,
            },
            {
              path: '/home/elements/equipement',
              element: <Equipement/>,
            },
            {
              path: '/home/elements/transmission',
              element: <Transmission/>,
            },
          ]
        },
        {
          path: '/home/annonces-en-attente',
          element: <Annonce/>
        },
        {
          path: '/home/commission',
          element: <Commission/>
        },
      ],

    },

  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;