import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./components/Error";
import { DashboardLayout } from "./_layouts/DashboardLayout";
import Savings from "./pages/savings";
import Categories from "./pages/categories-list";
import AddCategory from "./pages/AddCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error/>
  },
  {
    path: "login",
    element: <Login />,
  },
 
  {
    path: "dashboard",
    element: <DashboardLayout/>,
    errorElement: <Error />,
    children:[
    {
      path:"",
      element: <Dashboard />,
    },
    {
      path:"savings",
      element: <Savings />
    },
    {
      path:"categories",
      children:[
        {
          path:"",
          element: <Categories />
        },{
          path:"add",
          element:<AddCategory/>
        }
      ]
    },
    {
      path:"transactions",
      element: <Savings />
    },
    {
      path:"budgets",
      element: <Savings />
    },   
    {
      path:"accounts",
      element: <Savings />
    },   
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
