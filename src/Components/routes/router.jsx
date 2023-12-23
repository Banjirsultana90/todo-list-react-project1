import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Taskboard from "../dashborad/Taskboard";
import Dashboard from "../dashborad/Dashboard";
import Alltask from "../dashborad/Alltask";
import Contact from "../Contact/Contact";
import About from "../about/About";
import Update from "../dashborad/Update";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
       {
        path:'/',
        element:<Home></Home>

       },
    //    {
    //     path:'/taskboard',
    //     element:<Taskboard></Taskboard>,
    //     loader:()=>fetch('http://localhost:5000/tasks')
        
    //    },
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/register',
        element:<Register></Register>
       },
       {
        path:'/contact',
        element:<Contact></Contact>

       },
       {
        path:'/about',
        element:<About></About>
       },
       {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`https://todo-list-server-five.vercel.app/tasks/${params.id}`)
        
    }

      ]
    },
    {
       
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
           { 
            path:'createtask',
            element:<Taskboard></Taskboard>
           
        },
        {
            path:'alltask',
            element:<Alltask></Alltask>,
            // loader:()=>fetch('http://localhost:5000/alluser')


        },
       
        ]

    }
  ]);
  