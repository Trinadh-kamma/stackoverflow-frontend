import "./AfterLoginHome.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainQuestionPage from '../../components/MainQuestionPage/MainQuestionPage'
import RightSidebar from "../../components/RightSidebar/RightSidebar"


const AfterLoginHome = ({isMenu}) => {
  return (
    <section className='main__home-container1'>
      {isMenu ? (<SideNavbar/>) : null}
      <Sidebar/>
      <div className="questions-and__details_container">
        <MainQuestionPage/>
        <RightSidebar/>
      </div>
    </section>
  )
}

export default AfterLoginHome
