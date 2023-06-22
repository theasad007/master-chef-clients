import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@smastrom/react-rating/style.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    <ToastContainer />
  </AuthProvider>
)
