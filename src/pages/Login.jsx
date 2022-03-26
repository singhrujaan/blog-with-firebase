import React, { useEffect } from 'react'
import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../firebase.config"
import { useNavigate } from 'react-router'
const Login = ({setIsAuth,isAuth}) =>{
  useEffect(()=>{
    console.log("loginpage",isAuth);

  },[])
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
          console.log("result",result)
            localStorage.setItem('isAuth',true)
            setIsAuth(true)
            // window.location.pathname="/"
            navigate('/')
        })
    }

    const navigate =useNavigate()
    
  return (
    <div className='h-screen m-auto '>
      {    console.log("loginpageui",isAuth)}
        <h1 className=''>Sign in with Google</h1>
        <button className='bg-orange-600 text-white py-3 px-9 rounded-sm hover:bg-orange-700 font-semibold' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login