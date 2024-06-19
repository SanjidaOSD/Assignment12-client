
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
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import CampaignDetails from "../Pages/CampaignDetails/CampaignDetails";
import MyDonations from "../Pages/Dahsboard/User/MyDonations/MyDonations";
import AllPets from './../Pages/Dahsboard/Admin/AllPets/AllPets';
import AllDonations from './../Pages/Dahsboard/Admin/AllDonations/AllDonations';
import UpdateCampaign from "../Pages/Dahsboard/User/UpdateCampaign/UpdateCampaign";
import PrivateRoute from "./PriveteRoute";
import AdminRoute from "./AdminRoute";


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
        element: <Petlisting />
      },
      {
        path: '/donation-campaigns',
        element: <DonationCampaigns />
      },
      {
        path: '/pet-details/:id',
        element: <PrivateRoute><PetDetails /></PrivateRoute>
      },
      {
        path: '/campaign-details/:id',
        element: <PrivateRoute><CampaignDetails /></PrivateRoute>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // ====== Users Routes ========
      {
        path: 'add-pet',
        element: <PrivateRoute><AddPet /></PrivateRoute>
      },
      {
        path: 'my-added-pets',
        element: <PrivateRoute><MyAddedPets /></PrivateRoute>
      },
      {
        path: 'pet-update/:id',
        element: <PrivateRoute><PetUpdate /></PrivateRoute>
      },
      {
        path: 'adoption-request',
        element: <PrivateRoute><AdoptionRequest /></PrivateRoute>
      },
      {
        path: 'create-campaign',
        element: <PrivateRoute><CreateCampaign /></PrivateRoute>
      },
      {
        path: 'my-campaign',
        element: <PrivateRoute><MyCampaign /></PrivateRoute>
      },
      {
        path: 'update-campaign/:id',
        element: <PrivateRoute><UpdateCampaign /></PrivateRoute>
      },
      {
        path: 'my-donations',
        element: <PrivateRoute><MyDonations /></PrivateRoute>
      },

      // ====== Admin Routes ========
      {
        path: 'users',
        element: <AdminRoute><Users /></AdminRoute>
      },
      {
        path: 'all-pets',
        element: <AdminRoute><AllPets /></AdminRoute>
      },
      {
        path: 'all-donations',
        element: <AdminRoute><AllDonations /></AdminRoute>
      },

    ]
  }
]);