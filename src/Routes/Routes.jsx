
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
import AdoptionRequest from "../Pages/Dahsboard/User/AdoptionRequest/AdoptionRequest";
import CreateCampaign from "../Pages/Dahsboard/User/CreateCampaign/CreateCampaign";
import MyCampaign from "../Pages/Dahsboard/User/MyCampaign/MyCampaign";
import Petlisting from "../Pages/PetListing/Petlisting";
import PetDetails from "../Pages/PetDetails/PetDetails";


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
      {
        path: '/pet-listing',
        element: <Petlisting/>
      },
      {
        path: '/pet-details/:id',
        element: <PetDetails/>
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
        element: <MyAddedPets />
      },
      {
        path: 'pet-update/:id',
        element: <PetUpdate />
      },
      {
        path: 'adoption-request',
        element: <AdoptionRequest/>
      },
      {
        path: 'create-campaign',
        element: <CreateCampaign/>
      },
      {
        path: 'my-campaign',
        element: <MyCampaign/>
      },

      // ====== Admin Routes ========
      {
        path: 'users',
        element: <Users />
      },

    ]
  }
]);