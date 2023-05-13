import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/DisplayQuestion/DisplayQuestion'

const AllRoutes = ({user, isMenu}) => {
  return (
    <div>
      <Routes>
        <Route exact path = "/" 
        element = {<Home user={user} isMenu = {isMenu}/>}
        />
        <Route exact path = "/Auth" element = { <Auth /> }/>
        <Route exact path = "/questions" element = { <Questions isMenu = {isMenu}/> }/>
        <Route exact path = "/askquestion" element = {<AskQuestion isMenu = {isMenu}/>}/>
        <Route exact path="/questions/:id" element = {<DisplayQuestion isMenu = {isMenu}/>}/>
      </Routes>
    </div>
  )
}


export default AllRoutes