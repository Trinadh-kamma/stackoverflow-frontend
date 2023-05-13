import React from 'react'
import "./DisplayQuestion.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import QuestionDetails from '../../components/QuestionDetails/QuestionDetails'
import Footer from '../../components/Footer/Footer'

const DisplayQuestion = ({isMenu}) => {

  return (
    <>
    <div className="main-container">
      {isMenu ? <SideNavbar/> : null}
      <Sidebar/>
      <div className="main__question__container">
        <QuestionDetails/>
      </div>
    </div> 
    <Footer/> 
    </>
  )
}

export default DisplayQuestion
