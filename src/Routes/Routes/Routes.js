import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import GameDetails from "../../Pages/Home/components/GameSlider/GameDetails";
import GameSlider from "../../Pages/Home/components/GameSlider/GameSlider";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import PlayGames from "../../Pages/PlayGames/PlayGames";
import PlayGamesSingle from "../../Pages/PlayGamesSingle/PlayGamesSingle";
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
import PaymentSuccess from "../../Pages/Dashboard/Payment/PaymentSuccess";
import AllPlayers from "../../Pages/Home/components/ExperianceSection/AllPlayers";
// import ProfileDetail from "../../Pages/ProfilePage/ProfileDetail";
import MyProfile from "../../Pages/Dashboard/MyProfile/MyProfile";
import CommunityFeed from "../../Pages/Dashboard/CommunityFeed/CommunityFeed";
import Flappy from "../../Pages/2Dgames/FlappyGames/Flappy.jsx";
import PlayerProfile from "../../Pages/PlayerProfile/PlayerProfile";
import SnakeGame from "../../Pages/2Dgames/SnakeGame/SnakeGame";
import TetrisGame from "../../Pages/2Dgames/TetrisGame/TetrisGame";

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
      // {
      //   path: "/users/:id",
      //   loader: async ({ params }) =>
      //     fetch(`https://gamespace-server.vercel.app/users/${params.id}`),
      //   element: <ProfileDetail />,
      // },
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
        path: "/flappy",
        element: <Flappy />,
      },
      {
        path: "/snakeGame",
        element: <SnakeGame />,
      },
      {
        path: "/tetrisGame",
        element: <TetrisGame />,
      },
      {
        path: "/livestream",
        element: <LiveStream />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/communityfeed",
        element: (
          <PrivateRoute>
            <CommunityFeed />
          </PrivateRoute>
        ),
      },
      {
        path: "/playerProfile/:playerEmail",
        loader: async ({ params }) =>
          fetch(
            `https://gamespace-server.vercel.app/playerprofile/${params.playerEmail}`
          ),
        element: <PlayerProfile />,
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
        element: <MyProfile />,
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
