import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllPlayers from "../../Pages/Home/components/ActivePlayers/AllPlayers";
import GameSlider from "../../Pages/Home/components/GameSlider/GameSlider";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Support from "../../Pages/Support/Support";


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
                path:'/shop',
                element: <GameSlider></GameSlider>
            },
            {
                path:'/support',
                element: <Support/>
            }
        ]
    }
])


export default router