import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import AllPlayers from "../../Pages/Home/components/ActivePlayers/AllPlayers";
import GameDetails from "../../Pages/Home/components/GameSlider/GameDetails";
import GameSlider from "../../Pages/Home/components/GameSlider/GameSlider";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PlayGames from "../../Pages/PlayGames/PlayGames";
import PlayGamesSingle from "../../Pages/PlayGamesSingle/PlayGamesSingle";
import Register from "../../Pages/Register/Register";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import CandyCrash from "../../Pages/2Dgames/CandyCrash/CandyCrash";
import TwoDGmaes from "../../Pages/2Dgames/TwoDGmaes";
import Memory from "../../Pages/2Dgames/Flappy/Memory";
import TikTakToe from "../../Pages/2Dgames/TikTakToe/TikTakToe";
import LiveStream from "../../Pages/LiveStream/LiveStream";
import Error404Page from "../../Pages/Shared/Error404Page/Error404Page";
import AddHtmlGames from "../../Pages/Dashboard/AddHtmlGames/AddHtmlGames";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllHtmlGames from "../../Pages/Dashboard/AllHtmlGames/AllHtmlGames";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyFavoriteGames from "../../Pages/Dashboard/MyFavoriteGames/MyFavoriteGames";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allplayers",
        element: <AllPlayers />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/downloadGames/:id",
        element: <GameDetails></GameDetails>,

        loader: ({ params }) =>
          fetch(
            `https://gamespace-server.vercel.app/downloadGames/${params.id}`
          ),
      },
      {
        path: "/playGames",
        element: <PlayGames />,
      },
      {
        path: "/gameshtml/:id",
        loader: async ({ params }) =>
          fetch(`https://gamespace-server.vercel.app/playGames/${params.id}`),
        element: <PlayGamesSingle />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/shop",
        element: <GameSlider></GameSlider>,
      },
      {
        path: "/2dgames",
        element: <TwoDGmaes />,
      },
      {
        path: "/candycrash",
        element: <CandyCrash />,
      },
      {
        path: "/tikTakToe",
        element: <TikTakToe />,
      },
      {
        path: "/memory",
        element: <Memory />,
      },
      {
        path: "/livestream",
        element: <LiveStream />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/favoriteGames",
        element: <MyFavoriteGames />,
      },
      {
        path: "/dashboard/profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard/allHtmlGames",
        element: (
          <AdminRoute>
            <AllHtmlGames />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addHtmlGames",
        element: (
          <AdminRoute>
            <AddHtmlGames />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://gamespace-server.vercel.app/orderedGames/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);
export default router;
