import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Component/Home/Home';
import Chef from '../Component/Chef/Chef';
import ChefDetails from '../Component/ChefDetails/ChefDetails';
import RecipeDetails from '../Component/RecipeDetails/RecipeDetails';
import NotFound from '../Component/NotFound/NotFound';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import UserProfile from '../Component/UserProfile/UserProfile';
import PrivateRoute from '../Component/PrivateRoute/PrivateRoute';
import Blogs from '../Component/Blogs/Blogs';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://master-chef-server-theasad007.vercel.app/chef')
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`https://master-chef-server-theasad007.vercel.app/chef/${params.id}`)
            },
            {
                path: '/chef/:id/recipes/:recipeId',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://master-chef-server-theasad007.vercel.app/chef/${params.id}/recipes/${params.recipeId}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;