
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import EmailLogin from '../Pages/Login/EmailLogin';
import GithubLogin from '../Pages/Login/GithubLogin';
import GoogleLogin from '../Pages/Login/GoogleLogin';
import SignUp from "../Pages/Login/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddPet from "../Pages/Dahsboard/User/AddPet/AddPet";
import Users from "../Pages/Dahsboard/Admin/Users/Users";
import MyAddedPets from "../Pages/Dahsboard/User/MyAddedPets/MyAddedPets";
import PetUpdate from "../Pages/Dahsboard/User/PetUpdate/PetUpdate";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/emailLogin',
        element: <EmailLogin></EmailLogin>
      },
      {
        path: '/githubLogin',
        element: <GithubLogin></GithubLogin>

      },
      {
        path: '/googleLogin',
        element: <GoogleLogin></GoogleLogin>

      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      // ====== Users Routes ========
      {
        path: 'add-pet',
        element: <AddPet />
      },
      {
        path: 'my-added-pets',
        element: <MyAddedPets/>
      },
      {
        path: 'pet-update/:id',
        element: <PetUpdate/>
      },

      // ====== Admin Routes ========
      {
        path: 'users',
        element: <Users/>
      },

    ]
  }
]);