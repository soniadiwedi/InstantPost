import React, { useContext } from 'react'
import "./layout.scss"
import Navbar from '../navbar/Navbar'
import LeftSideBar from '../leftSideBar/LeftSideBar'
import RightSideBar from '../rightSideBar/RightSideBar'
import { Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../context/DarkModeContext'
const Layout = () => {
  const {darkMode}=useContext(DarkModeContext);
  return (
    <div className={ `theme-${darkMode ?"dark":"light"} `}>
      <Navbar/>
      <div style={{display:"flex"}}>
        <LeftSideBar/>
        <div style={{flex:"6",}}>

        <Outlet/>
        </div>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Layout