import React from 'react'
import { LOGOUT } from '../../../Api/Api'
import { Axios } from '../../../Api/axios'

function Logout() {

    async function handleLogout(){
        try{
            await Axios.get(`/${LOGOUT}`)
    }catch(err){
        console.log(err)
    }
    }
    
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout