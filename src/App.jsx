import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { useState , useEffect ,useContext} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogLanding from './Blog/BlogLanding';
import BlogNavbar from './Header/BlogNavbar';
import Footer from './Footer/Footer'
import LoginForm from './Blog-Login/LoginForm';
import SignupForm from './Singup/SingupForm';
import BlogLayout from './BlogLayout/BlogLayout';
import ProfilePage from './Profile/ProfilePage';
import TabSection from './Tab/TabSection';
import BlogList from './BlogList/BlogList';
import EditBlog from './EditBlog/EditBlog';
import CreateBlog from './CreateBlog/CreateBlog';
import AboutPage from './About/AboutPage';
import TextEditor from './TextEditor/TextEditor';
import { ThemeContext ,ThemeProvider } from './Context/ThemeContext';
import CategoriesList from './CategoriesList/CategoriesList';
import EditProfile from './EditProfile/EditProfile';
import CreatingBlog from './CreateBlog/CreatingBlog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BlogLanding />,
      },
      {
        path: '/get-started',
        element: <LoginForm />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <SignupForm />,
      },
      {
        path: '/home',
        element: <BlogLayout />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/detail',
        element: <TabSection />,
      },
      {
        path: '/list',
        element: <BlogList />,
      },
      {
        path: '/editblog/:id',  
        element: <EditBlog />,
      },
      {
        path: '/createblog',
        element: <CreateBlog />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/blog/:id',
        element: <TabSection />,
      },
      {
        path: '/texteditor',
        element: <TextEditor />,
      },
      // {
      //   path: '/creatingblog', 
      //   element: <CreatingBlog />,
      // },
      {
        path: '/creatingblog/:id',
        element: <CreatingBlog />,
      },
      {
        path: '/categorieslist',
        element: <CategoriesList />,
      },
      {
        path: '/EditProfile',
        element: <EditProfile />,
      },
      {
        path: '/write',
        element: <CreatingBlog />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}


export default App;
