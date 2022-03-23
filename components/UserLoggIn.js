import React, {useState} from 'react'
import { auth } from '../utils/firebase.js';
import {onAuthStateChanged, signOut} from 'firebase/auth'
function UserLoggIn() {
  const [userLogged, setUserLogged] = useState({});

  onAuthStateChanged(auth, (currentUser) =>{
      setUserLogged(currentUser);
  })

  const logout = async () => {
     await signOut(auth);
  }
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-semibold uppercase text-[#343653] pb-4'> You&apos;re logged as</h1>
        {<p className='text-2xl font-semibold text-[#343653] pb-4'>{userLogged?.email}</p>}
        <button 
          className='bg-[#343653] w-[150px] rounded-full text-white text-center uppercase font-semibold py-2 px-4 mb-10 text-[14px]'
          onClick = {logout}>
          Log Out
          </button>
    </div>
  )
}

export default UserLoggIn