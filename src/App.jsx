import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogLanding from './Blog/BlogLanding'
import BlogNavbar from './Header/BlogNavbar'
import Footer from './Footer/Footer'
import BlogList from './BlogList/BlogList'
import BlogLayout from './BlogLayout/BlogLayout'
import TabSection from './Tab/TabSection'
import LoginForm from './Blog-Login/LoginForm'
import ProfilePage from './Profile/ProfilePage'
import SignupForm from './Singup/SingupForm'



const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignupForm/>,
  // },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BlogLanding />  // Or another homepage component
      },
      {
        path: '/get-started',
        element: <BlogLayout />
      }
      
     
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App
