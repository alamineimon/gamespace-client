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
import Support from "../../Pages/Support/Support";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Sidebar from "../../Pages/Dashboard/Sidebar/Sidebar";
import CandyCrash from "../../Pages/2Dgames/CandyCrash/CandyCrash";
import TwoDGmaes from "../../Pages/2Dgames/TwoDGmaes";
import Memory from "../../Pages/2Dgames/Flappy/Memory";
import TikTakToe from "../../Pages/2Dgames/TikTakToe/TikTakToe";
import Error404Page from "../../Pages/Shared/Error404Page/Error404Page";

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
        path: "/gameDetails/:id",
        element: <GameDetails></GameDetails>,
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
        path: "/support",
        element: <Support />,
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/addproduct",
        element: <Sidebar />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);
export default router;
