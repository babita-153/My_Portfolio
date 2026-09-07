import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProjectPage from '../pages/ProjectPage'

const AppRoutes = () => {
   let router=createBrowserRouter([
      {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<HomePage/>
            },
            {
                path:"about",
                element:<AboutPage/>
            },
            {
                path:"project",
                element:<ProjectPage/>
            }
        ]
      }
   ])
    return <RouterProvider router={router}/>
}

export default AppRoutes
