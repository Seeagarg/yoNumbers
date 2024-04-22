import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import SubscriptionPage from "../pages/SubscriptionPage";
import LoginPage from "../pages/LoginPage";
import OtpPage from "../pages/OtpPage";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import LilOnesPage from "../pages/LilOnesPage";
import CategoryPage from "../pages/CategoryPage";
import LoadingPage from "../pages/LoadingPage";
import ProfilePage from "../pages/ProfilePage";
import Auth from "../auth/Auth";
import Games from "../pages/Games";
import LeaderBoard from "../pages/LeaderBoard";
import Information from "../pages/Information";
import AllGames from "../pages/AllGames";



const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IntroPage />,
    },
    {
      path: "/loading",
      element: <LoadingPage />,
    },
    {
      path: "/subscribe",
      element: <SubscriptionPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/otp",
      element: <OtpPage />,
    },
    {
      path: "/auth",
      element: (
        // <Auth>
          <AuthPage />
        // </Auth>
      ),
    },
    {
      path: "/home",
      element: (
        // <Auth>
          <Home />
        // </Auth>
      ),
    },
    {
      path: "/game",
      element: (
        // <Auth>
          <Games/>
        // </Auth>
      ),
    },
    {
      path: "/leaderBoard",
      element: <LeaderBoard />,
    },
    {
      path: "/information",
      element: <Information/>,
    },
    {
      path: "/allgames",
      element: <AllGames/>,
    },
   
    // {
    //   path: "/LilOnes_English",
    //   element: (
    //     // <Auth>
    //       <CategoryPage />
    //     // </Auth>
    //   ),
    // },
    // {
    //   path: "/profile",
    //   element: (
    //     // <Auth>
    //       <ProfilePage />
    //     // </Auth>
    //   ),
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
