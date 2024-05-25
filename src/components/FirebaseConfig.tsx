import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4oTt4KYiGTajrF02YoobmJ0MrpbxpKs0",
  authDomain: "cyberverdict-a4c31.firebaseapp.com",
  projectId: "cyberverdict-a4c31",
  storageBucket: "cyberverdict-a4c31.appspot.com",
  messagingSenderId: "837530208297",
  appId: "1:837530208297:web:551df01907b0daf7173438",
  measurementId: "G-5NSB4Q369D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}