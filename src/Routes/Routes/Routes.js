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
import Flappy from "../../Pages/Home/components/Flappy/Flappy";

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
        path: "/play-games",
        element: <PlayGames />,
      },
      {
        path: "/demoSingle",
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
        path: "*",
        element: <h1>Error 404 page not found</h1>,
      },
      {
        path: "/flappy",
        element: <Flappy/>,
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
]);
export default router;
