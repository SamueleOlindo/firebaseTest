import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVg3EJB3epXbeUPa1yy5h78JxBW3orG70",
  authDomain: "mava-test.firebaseapp.com",
  projectId: "mava-test",
  storageBucket: "mava-test.appspot.com",
  messagingSenderId: "443314936893",
  appId: "1:443314936893:web:e235d9a62931ad76791e54"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
   signInWithPopup(auth, provider).then((result) => {
       console.log(result);
   })
   .catch((e) => {
     console.log(e)
   })
}