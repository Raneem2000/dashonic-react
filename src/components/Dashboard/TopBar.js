import React, { useEffect, useContext, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '../../Context/MenuContext'
import { LOGOUT, USER } from '../../Api/Api';
import { Axios } from '../../Api/axios';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';

function TopBar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;

  const cookie = Cookie();

  const nav = useNavigate();

  const [name, setName] = useState('');
  
  useEffect(() =>{
    Axios.get(`/${USER}`)
    .then((data) => setName(data.data.name))
    .catch(() => nav('/login' , {replace : true}))
} ,[])

async function handleLogout(){
  try{
      await Axios.get(`/${LOGOUT}`)
      cookie.remove('e-commerce');
      window.location.pathname = '/login'
}catch(err){
  console.log(err)
}
}

  return (
    <>
    <div className='top-bar '>
     <div className='d-flex align-items-center justify-content-between h-100'>
     <div className='d-flex align-items-center gap-5'>
     <h3>E-commerce</h3>
      <FontAwesomeIcon
        onClick={() => setIsOpen((prev) => !prev)}
        style={{paddingLeft:'1rem',cursor:'pointer',fontSize:'1.3rem'}} icon={faBars} />
     </div>
     <div>
      <DropdownButton style={{marginRight:'2rem'}} id= 'dropdown-basic-button' title={name}>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
     </div>
     </div>
    </div>
    </>
  )
}

export default TopBar