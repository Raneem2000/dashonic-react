import React, { useEffect, useState } from 'react'
import Cookie from 'cookie-universal';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER, baseUrl } from '../../../Api/Api';
import Loading from '../../../components/Loading/Loading';
import { Axios } from '../../../Api/axios';
import _403 from './403';

function RequireAuth({typeOfRule}) {

    const nav = useNavigate();
    const [user, setUser] = useState('');

    const cookie = Cookie();
    const token = cookie.get('e-commerce');

    useEffect(() =>{
        Axios.get(`/${USER}`)
        .then((data) => setUser(data.data))
        .catch(() => nav('/login' , {replace : true}))
    } ,[])

    return token
    ?  user === '' 
        ? <Loading/> 
        : typeOfRule.includes(user.role) 
        ? (<Outlet/>) 
        : (<_403 role={user.role}/>)
    : <Navigate to={'/login'} replace={true}/>
    
}

export default RequireAuth