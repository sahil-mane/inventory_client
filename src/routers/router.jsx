import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../component/Blog";
import About from "../component/About";
import SingleBook from "../shop/SingleBook"
import Notfound from "../component/Notfound";
import DashboardLayout from "../dashboard/DashboardLayout"
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../component/Signup";
import Login from "../component/Login"
import Logout from "../component/Logout"
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/shop",
            element:<Shop />
        },
        {
            path:"/blog",
            element:<Blog />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/book/:id",
            element: <SingleBook />,
            loader: ({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path:"*",
          element:<Notfound />
        }
      
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout />,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard /></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook />
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks />
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks />,
          loader: ({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
       
      ]
    },
    {
      path:'sign-up',
      element: <Signup/>
    },
    {
      path:"login",
      element:<Login />
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router;