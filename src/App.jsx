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
  //   path: "/signup",
  //   element: <SignupForm/>,
  // },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BlogLanding /> 
      },
      {
        path: '/get-started',
        element: <LoginForm />
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "home",
        element: <BlogLayout />,
      },
      {
        path: "profile",
        element: <ProfilePage/>
      },
      {
        path: "detail",
        element: <TabSection/>
      },
      {
        path: "list",
        element: <BlogList/>
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
