import React, {useState, useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../utils/firebase'
import { EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut, TwitterAuthProvider } from 'firebase/auth';
import {auth} from '../utils/firebase.js'
import {signInWithGoogle} from '../utils/firebase.js'
import {AiFillGoogleCircle} from 'react-icons/ai';




function Signup() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() =>{
     const unregistered =  onAuthStateChanged(auth, (user) =>{
        setIsSignedIn(!!user);
      })
    return () => unregistered();
  },[])
   
  const uiConfig = {
    
     signInSuccessUrl: '/pages/index',
     signInFlow : 'popup',
     signInOptions: [
       //for emails
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
       },
       
       
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        
     ],
     callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }
 
  
  return (
    <div>
      {!isSignedIn ? (
        <div className='flex flex-col items-center justify-center rounded-lg bg-[#bcffff] w-[500px] mt-16 py-6'>
        <h1 className='text-xl py-2 font-semibold text-[#343653]'>sign in using your favourite method</h1>
      <StyledFirebaseAuth className='py-6' uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      ):
      (
        <div>
        <p>you're Signed in</p>
        <p>welcome {auth.currentUser.displayName}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
        </div>
      )
    
    }
      
    </div>
  )
}

export default Signup;