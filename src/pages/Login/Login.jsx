import React from 'react'
import "./Login.css"
import logo from "../../assets/icon.png"
import navigateArrow from "../../assets/arrow.png"

const Login = ({isSignUp, setIsSignUp}) => {

  const handleLogin = () => {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="login__container">
      <img src={logo} alt="stack-Overflow-logo"/>
      <form className="login__details-container">
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type="email" name="email" id="email" required/>
        </label>
        <label htmlFor='password'>
          <div className="password-container">
          <h4>Password</h4>
          <a href="https://stackoverflow.com/users/account-recovery">Forgot Password?</a>
          </div>
          <input type="password" name="password" id="password" required/>
        </label>
        <button type="submit">Login</button>
      </form>

      <div className="login-info">
        <p>
          Don't have an account? 
          <button onClick={handleLogin}>Sign up</button>
        </p>
        <p>
          Are you an employer?
          <a href="https://talent.stackoverflow.com/users/login">
            Sign up on Talent
            <img src={navigateArrow} alt="navigate-arrow"/>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login