import React from "react";
import { createBrowserRouter } from "react-router-dom";
//layout
import Layout from "../layouts/";
//pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Challenges from "../pages/Challenges/Challenges";
import CreateNewChallenge from "../pages/CreateNewChallenge/CreateNewChallenge";
import Notifications from "../pages/Notifications/Notifications";
import Peoples from "../pages/Peoples";
import Settings from "../pages/Settings/Settings";
import BasicInfo from "../pages/Settings/BasicInfo";
import Account from "../pages/Settings/Account";
import Privacy from "../pages/Settings/Privacy";
import NotificationSettings from "../pages/Settings/NotificationSettings";
import NameAndContactInfo from "../pages/NameAndContactInfo";
import PasswordAndSecurity from "../pages/PasswordAndSecurity";
import Accounts from "../pages/Accounts/Accounts";
import Signin from "../pages/Accounts/Signin";
import Signup from "../pages/Accounts/Signup";
import ChangePassword from "../pages/Accounts/ChangePassword";
import ResetPassword from "../pages/Accounts/ResetPassword";
export default createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
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
          path: '/notifications',
          element: <Notifications />
        },
        {
          path: '/peoples',
          element: <Peoples />
        },
        {
          path: '/settings',
          element: <Settings />,
          children: [
            {
              path: '',
              element: <BasicInfo />
            },
            {
              path: 'account',
              element: <Account />
            },
            {
              path: 'privacy',
              element: <Privacy />
            },
            {
              path: 'notifications',
              element: <NotificationSettings />
            }
          ]
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
          path: '/accounts',
          element: <Accounts />,
          children: [
            {
              path:'signup',
              element: <Signup />
            },
            {
              path: 'signin',
              element: <Signin />
            },
            {
              path: 'password/change',
              element: <ChangePassword />
            },
            {
              path: 'password/reset',
              element: <ResetPassword />
            }
         
          ]
        }
      ]
    },

  ]
)

