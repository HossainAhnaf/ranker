import React from "react";
import { createBrowserRouter } from "react-router-dom";
//layout
import Layout from "../layouts/";
//pages
import Profile from "../pages/Profile";
import Challenges from "../pages/Challenges";
import CreateNewChallenge from "../pages/CreateNewChallenge";
import Peoples from "../pages/Peoples";
import Settings from "../pages/Settings";
import NameAndContactInfo from "../pages/NameAndContactInfo";
import PasswordAndSecurity from "../pages/PasswordAndSecurity";
import NotificationsPreference from "../pages/NotificationsPreference";
import Display from "../pages/Display";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
export default createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <p>lol</p>
        },
        {
          path: '/profile/:username',
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
          path: '/settings',
          element: <Settings />, 
        },
        {
          path: '/name-and-contact-info',
          element: <NameAndContactInfo />
        },
        {
          path: '/password-and-security',
          element: <PasswordAndSecurity />
        },
        {
          path: '/notifications-preference',
          element: <NotificationsPreference />
        },
        {
          path: '/display',
          element: <Display />
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

 