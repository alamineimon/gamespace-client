import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// our web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDr89vnpSLi0GzlOxvI-ZCLQ49_hqlMqqY",
 authDomain: process.env.REACT_APP_authDomain,
 projectId: process.env.REACT_APP_projectId,
 storageBucket: process.env.REACT_APP_storageBucket,
 messagingSenderId: process.env.REACT_APP_messagingSenderId,
 appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;