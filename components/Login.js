import React , {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../utils/firebase.js'

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
  
  const login = async () => {
    try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
     }catch(e){
         console.log(e.message);
     }
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoginEmail("");
      setLoginPassword("");
  }

  return (
    <div className='mt-20'>
        <form onSubmit={handleSubmit}  className = "md:flex flex-col w-[500px] justify-center bg-[#bcffff] py-6 px-6 rounded-lg">
        <h1 className='md:text-5xl text-[#343653] uppercase font-bold text-center pb-8'>Login</h1>
        <input
          type="text" 
          value={loginEmail ?? ""}
          placeholder='Enter your email'
          onChange = {(e) => setLoginEmail(e.target.value)} 
          className = "md:bg-[#f2f2f2] rounded-full py-2 pl-4 mb-4 outline-none"
        />
        <input 
          type="text" 
          value={loginPassword ?? ""} 
          placeholder='Enter your password' 
          onChange = {(e) => setLoginPassword(e.target.value)}
          className = "md:bg-[#f2f2f2] rounded-full py-2 pl-4 mb-4 outline-none"
        />
        <div className='flex flex-col justify-center items-center py-4'>
         <button 
          type= "submit"
          className= "bg-[#343653] w-[150px] rounded-full text-white text-center uppercase font-semibold py-2 px-4 text-[14px] "
          onClick={login}>
          
           Login
         </button>
        </div>
        </form>

    </div>
  )
}

export default Login