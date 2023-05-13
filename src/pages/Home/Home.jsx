import React from 'react'
import MainHome from "../MainHome/MainHome"
import AfterLoginHome from "../AfterLoginHome/AfterLoginHome";
import "./Home.css"
import Footer from '../../components/Footer/Footer';

const Home = ({user, isMenu, setIsMenu}) => {

  return (
    <>
      <div className="main__home-container">
        {user === null ? 
        (<MainHome />) 
        : 
        (<AfterLoginHome isMenu = {isMenu}/>)}
      </div>
      <Footer/>  
    </>
  )
}

export default Home

