import React, {lazy, Suspense} from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
// import Grocery from "./components/Grocery";
/*
const styleCard = {
    backgroundColor:"#f0f0f0"  
};
*/

/****
 * Chunking
 * Code Splitting
 * lazy loading
 * on demand loading
 * dynamic import
 */

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children : [
            {
                path:"/",
                element :<Body  />
            },
            {
                path:"/about",
                element: <Suspense fallback = { <Shimmer  />}><About /></Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback = { <Shimmer  />}><Grocery /></Suspense>
               
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu  />
            }
        ],
        errorElement:<Error  />
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router ={appRouter}/>);