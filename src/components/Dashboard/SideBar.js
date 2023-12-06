import React, { useContext, useEffect, useState } from 'react'
import './bars.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu } from '../../Context/MenuContext'
import {WindowSize} from '../../Context/WindowContext'
import { USER } from '../../Api/Api'
import { Axios } from '../../Api/axios'
import { links } from './NavLink'

function SideBar() {
  const WindowContext = useContext(WindowSize)
  const windowSize = WindowContext.windowSize;
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  
  const nav = useNavigate();

  const [user, setUser] = useState('');
  
  useEffect(() =>{
    Axios.get(`/${USER}`)
    .then((data) => setUser(data.data))
    .catch(() => nav('/login' , {replace : true}))
} ,[])

  return (
    <>
    <div style={{
      position: 'fixed',
      width: '100%',
      height : '100vh',
      top: '100px',
      left: '0',
      backgroundColor: 'rgba(0, 0 ,0, 0.3)',
      display: windowSize < '768' && isOpen ? 'block' : 'none' ,
    }}>
    </div>
    <div 
    className='side-bar pt-4'
    style={{
      left: windowSize < '768' ? (isOpen ? 0 : '-100%') : 0,
      width: isOpen? '17rem': 'fit-content',
      position: windowSize < '768'? 'fixed' : 'sticky'
    }}
    >
    {
    links.map((link ,key) => 
      link.role.includes(user.role) && (
      <NavLink 
        key={key}
        to={link.path} 
        className='d-flex align-items-center gap-2 side-bar-link'>
        <FontAwesomeIcon icon={link.icon} />
        <p className='m-0' style={{
          display: isOpen? 'block': 'none'
        }}>{link.name}</p>
      </NavLink>
    ))
    }
    </div>
  </>
  )
}

export default SideBar