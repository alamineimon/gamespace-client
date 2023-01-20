import { createBrowserRouter } from "react-router-dom";
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
        path: "/shop",
        element: <GameSlider></GameSlider>,
      },
                  {
                path:'/support',
                element: <Support/>
            },
      {
        path: "*",
        element: <h1>Error 404 page not found</h1>,
      },
    ],
  },
]);
export default router;
