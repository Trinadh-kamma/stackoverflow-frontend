import React from 'react'
import "./Questions.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import AllQuestions from '../AllQuestions/AllQuestions'
import Footer from '../../components/Footer/Footer'


const Questions = ({isMenu}) => {
  return (
    <>
      <section className='main__question-container1'>
        {isMenu ? (<SideNavbar/>) : null}
        <Sidebar/>
        <div className="questions-and__details_container">
          <AllQuestions/>
          <RightSidebar/>
        </div>
      </section>
    <Footer/>
    </>
  )
}

export default Questions