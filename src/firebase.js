import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1Gim7mJtq6cMPMNzpHeX1uuGhqty5xic",
    authDomain: "react-firebase-cbf3a.firebaseapp.com",
    projectId: "react-firebase-cbf3a",
    storageBucket: "react-firebase-cbf3a.appspot.com",
    messagingSenderId: "988096053360",
    appId: "1:988096053360:web:bd220dd94c4b71a10234b5",
    measurementId: "G-HVQP7TRM9R"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
