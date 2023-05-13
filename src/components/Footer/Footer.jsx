import "./Footer.css"
import icon from "../../assets/icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="icon">
          <img src={icon} alt="stack-icon"/>
        </div>

        <div className="stack1">
          <h5>STACK OVERFLOW</h5>
          <div className="items">
            <p>Questions</p>
            <p>Help</p>
          </div>
        </div>

        <div className="stack1">
          <h5>PRODUCTS</h5>
          <div className="items">
            <p>Teams</p>
            <p>Advertising</p>
            <p>Collectives</p>
            <p>Talent</p>
          </div>
        </div>

        <div className="stack1">
          <h5>COMPANY</h5>
          <div className="items">
            <p>About</p>
            <p>Press</p>
            <p>Work Here</p>
            <p>Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>Cookie Settings</p>
            <p>Cookie Policy</p>
          </div>
        </div>

        <div className="stack1">
          <h5>STACK EXCHANGE NETWORK</h5>
          <div className="items">
            <p>Technology</p>
            <p>Culture & recreation</p>
            <p>Life & arts</p>
            <p>Science</p>
            <p>Professional</p>
            <p>Business</p>
            <p>API</p>
            <p>Data</p>
          </div>
        </div>

        <div className="stack2">
          <div className="social-media">
            <p>Blog</p>
            <p>Facebbok</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>

          <div className="details">
            <p>
              Site design / logo © 2023 Stack Exchange Inc; user 
              contributions licensed under <span>CC BY-SA</span>. rev 2023.5.5.43417
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
