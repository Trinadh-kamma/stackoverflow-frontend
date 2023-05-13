import React, {useState} from 'react'
import "./Auth.css"

import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

const Auth = () => {
  
  const [isSignUp, setIsSignUp] = useState(false);


  return (
    <div className='auth__container'>
      {isSignUp ? 
      <SignUp isSignUp={isSignUp} setIsSignUp = {setIsSignUp} /> 
      : 
      <Login isSignUp={isSignUp} setIsSignUp = {setIsSignUp} />}
    </div>
  )
}

export default Auth
