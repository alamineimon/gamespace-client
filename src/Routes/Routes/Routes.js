import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllPlayers from "../../Pages/Home/components/ActivePlayers/AllPlayers";
import GameDetails from "../../Pages/Home/components/GameSlider/GameDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>, 
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/allplayers',
                element: <AllPlayers/>
             },
             {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/gameDetails/:id',
                element: <GameDetails></GameDetails>
            }
        ]
    }
])


export default router