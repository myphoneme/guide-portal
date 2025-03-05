import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { useState , useEffect } from 'react';
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
import { ThemeContext } from './Context/ThemeContext';
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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} min-h-screen ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
