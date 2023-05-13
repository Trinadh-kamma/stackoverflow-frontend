import React from 'react'
import "./SignUp.css"
import questions from "../../assets/questions.png"
import sort from "../../assets/sort.png"
import trophy from "../../assets/trophy.png"
import tag from "../../assets/tag.png"
import navigateArrow1 from "../../assets/arrow.png"


const SignUp = ({isSignUp, setIsSignUp}) => {

  const handleSignup = () => {
    setIsSignUp(!isSignUp);
  }


  return (
    <div className="signup__container">
      
      <div className="signup__container-content">
        <h1>
          Join the  Stack Overflow community
        </h1>

        <div>
          <img src={questions} alt="questions"/>
          <h4>Get unstuck  — ask a question</h4>
        </div>

        <div>
          <img src={sort} alt="sort"/>
          <h4>Unlock new privileges like voting and commenting</h4>
        </div>

        <div>
          <img src={tag} alt="tag"/>
          <h4>Save your favorite tags, filters, and jobs</h4>
        </div>

        <div>
          <img src={trophy} alt="trophy"/>
          <h4>Earn reputation and badges</h4>
        </div>

        <p>
          Collaborate and share knowledge with a private group for FREE.<br/>
          <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">Get Stack Overflow for Teams free for up to 50 users.</a>
        </p>

      </div>

      <div className="signup__container-content2">
        <h1>
          Create your Stack Overflow account. It’s free and only takes a minute.            
        </h1>
      </div>

      <div className="signup__container-signup__details">
        <form className="login__details-container">
          
          <label htmlFor='display name'>
            <h4>Display name</h4>
            <input 
            required
            type="text"
            name="display Name" id="display name" className="input__margin"/>
          </label>

          <label htmlFor='email'>
            <h4>Email</h4>
            <input 
            required
            type="email" name="email" id="email" className="input__margin"/>
          </label>

          <label htmlFor='password'>
            <h4>Password</h4>
            <input
            required
            type="password" name="password" id="password"/>
          </label>

          <p>
            Passwords must contain at least eight characters, including at least 1 letter and 1 number.
          </p>

          <div className="checkbox-section">
            <div>
            <input type="checkbox" id="checkbox1"/>
            </div>
            <label htmlFor="checkbox1">
              Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
            </label>
          </div>

          <button type="submit">Signup</button>

          <p>
            By clicking “Sign up”, you agree to our <a href="https://stackoverflow.com/legal/terms-of-service/public">terms of service,</a> <a href="https://stackoverflow.com/legal/privacy-policy">privacy policy</a> and <a href="https://stackoverflow.com/legal/cookie-policy">cookie policy</a>
          </p>

        </form>

        <div className="login-info-signup">
          <p>
            Already have an account?
            <button onClick={handleSignup}>
              Log in
            </button>
          </p>
          <p>
            Are you an employer?  
            <a href="https://talent.stackoverflow.com/users/login">
            Sign up on Talent 
              <img src={navigateArrow1} alt="navigate-arrow"/>
            </a>
          </p>
        </div>

      </div>


    </div>
  )
}

export default SignUp
