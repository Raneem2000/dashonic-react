import React from 'react'
import TopBar from '../../components/Dashboard/TopBar'
import SideBar from '../../components/Dashboard/SideBar'
import {Outlet} from 'react-router-dom'
import './dashboard.css'
function Dashboard() {
  return (
    <div className='position-relative dashboard '>
      <TopBar/>
      <div className='d-flex  gap-1' style={{marginTop: '100px'}}>
      <SideBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard