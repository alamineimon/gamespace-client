import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr89vnpSLi0GzlOxvI-ZCLQ49_hqlMqqY",
  authDomain: "gamespace-ab237.firebaseapp.com",
  projectId: "gamespace-ab237",
  storageBucket: "gamespace-ab237.appspot.com",
  messagingSenderId: "448555604704",
  appId: "1:448555604704:web:75244d38d0a827c0da0e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;