import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllPlayers from "../../Pages/Home/components/ActivePlayers/AllPlayers";
import Home from "../../Pages/Home/Home";

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
            }
        ]
    }
])


export default router