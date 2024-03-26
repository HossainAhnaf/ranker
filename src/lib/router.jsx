import React from "react";
import { createBrowserRouter } from "react-router-dom";
//layout
import Layout from "../layouts/";
//pages
import Profile from "../pages/Profile";
import Challenges from "../pages/Challenges";
import CreateNewChallenge from "../pages/CreateNewChallenge";
import Peoples from "../pages/Peoples";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
export default createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Profile />
        },
        {
          path: '/challenges',
          element: <Challenges />
        },
        {
          path: '/create-new-challenge',
          element: <CreateNewChallenge />
        },
        {
          path: '/peoples',
          element: <Peoples />
        },
        {
          path: '/signin',
          element: <Signin />
        },
        {
          path: '/signup',
          element: <Signup />
        }

      ]
    },
   
  ]
)

 