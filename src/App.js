
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
 

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/profile/:id",
          element:<Profile/>,
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    },
   
    {
      path:"/register",
      element:<Register/>,
    },
   
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
