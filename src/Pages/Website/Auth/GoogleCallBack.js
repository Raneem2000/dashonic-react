import React, { useEffect } from 'react'
import { GOOGLE_CALL_BACK, baseUrl } from '../../../Api/Api'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Cookie from 'cookie-universal'
function GoogleCallBack() {

    const cookie = Cookie();

    const location = useLocation();

    useEffect(() => {
        async function googleCall() {
            try {
            const res = await axios.get(
                `${baseUrl}/${GOOGLE_CALL_BACK}${location.search}`)
            console.log(res)
            const token = res.data.access_token;
            cookie.set('e-commerce' , token)

        }catch(err) {
            console.log(err)
        }
        }
        googleCall();
    },[])
  return (
    <div>GoogleCallBack</div>
  )
}

export default GoogleCallBack