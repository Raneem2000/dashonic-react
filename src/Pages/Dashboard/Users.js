import React, { useEffect, useState } from 'react'
import { USER, USERS } from '../../Api/Api'
import Logout from '../Website/Auth/Logout';
import { Axios } from '../../Api/axios';
import { Link } from 'react-router-dom';
import TableShow from '../../components/Dashboard/Table';

function Users() {

  const [users, setUser] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  console.log(currentUser)

  useEffect(() => {
    Axios.get(`/${USER}`)
    .then((data) => setCurrentUser(data.data))
  },[])

    useEffect(() => {
      Axios.get(`/${USERS}`)
        .then((data) => setUser(data.data))
        // .then(() => setNoUser(true))
        .catch((err) => console.log(err))
    },[deleteUser])
    
    async function handleDelete(id){
      // if (currentUser.id !==  id)
      // {
      try{
        const res = await Axios.delete(`/${USER}/${id}`)
        console.log(res)
        setDeleteUser((prev) => !prev)
      }
      catch(err){
        console.log(err)
      }
    // }
  }

    const header = [
      {
        id: 'name',
        name : 'UserName',
      },
      {
        id: 'email',
        name : 'Email',
      },
      {
        id: 'role',
        name : 'Role',
      },
    ]
    // const userFilter = users.filter((user) => (user.id !== currentUser.id))

    return (
     <>
      <div className='bg-white w-100 h-50 p-5'>
    <div className='d-flex algin-items-center justify-content-between'>
    <h2>Table Users:</h2>
    <Link to='/dashboard/user/add' className='button button-primary mb-1' 
    style={{backgroundColor:'gray', textDecoration:'none'}}>
      Add User</Link>
    </div>
      <TableShow 
      header = {header} 
      data = {users} 
      delete = {handleDelete} 
      currentUser={currentUser}
      />
      </div>
     </>
    )
}

export default Users