import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8S8KyaE3hgPwrdR3Y7bQd2wLOqg99rwg",
  authDomain: "bigproekt-4d7b7.firebaseapp.com",
  projectId: "bigproekt-4d7b7",
  storageBucket: "bigproekt-4d7b7.appspot.com",
  messagingSenderId: "518986620714",
  appId: "1:518986620714:web:0aa2b9691d8463292ac853",
  measurementId: "G-NCH48HPMX9"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provide = new GoogleAuthProvider();
export{auth, provide}