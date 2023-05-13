import React from 'react'
import "./Widget.css"

import { MdEdit } from "react-icons/md"
import stack1 from "../../assets/stack1.png"
import message from "../../assets/message.png"

const Widget = () => {
  return (
    <div className="widget__container">
      <div className="widget1">
        <h4>The Overflow Blog</h4>
      </div>
      <div className="widget2">
        <div className="widget2__sub">
          <MdEdit/>
          <p>From Smalltalk to smart contracts, reflecting on 50 years of programming (Ep. 551)</p>
        </div>
        <div className="widget2__sub">
          <MdEdit/>
          <p>From cryptography to consensus: Q&A with CTO David Schwartz on building blockchain apps</p>
        </div>
      </div>




      <div className="widget1">
        <h4>Featured on Meta</h4>
      </div>

      <div className="widget2">
        <div className="widget2__sub">
          <img src={message} alt="message"/>
          <p>
            Improving the copy in the close modal and post notices - 2023 edition
          </p>
        </div>

        <div className="widget2__sub">
        <img src={stack1} alt="stack1"/>
          <p>
            Plagiarism flag and moderator tooling has launched to Stack Overflow!
          </p>
        </div>

        <div className="widget2__sub">
          <img src={stack1} alt="stack1"/>
          <p>
            Do you observe increased relevance of Related Questions with our Machine Learning experiment?
          </p>
        </div>

        <div className="widget2__sub">
          <img src={stack1} alt="stack1"/>
          <p>
          Use of ChatGPT generated text for content on Stack Overflow is <br/> temporarily banned.
          </p>
        </div>
      </div>
      



      <div className="widget1">
        <h4>Hot Meta Posts</h4>
      </div>
      <div className="widget2">
        <div className="widget2__sub">
          <p>27</p>
          <p>
            Warn users submitting suggested edits if another user edited in the interim
          </p>
        </div>
      </div>


    </div>
  )
}

export default Widget
