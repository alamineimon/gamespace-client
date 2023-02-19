import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./Routes/Routes/Routes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "./slice/auth/authSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user)
        dispatch(setUser(user.email))
      }
    })
  },[])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
