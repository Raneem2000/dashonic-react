import React, { useEffect, useRef, useState } from 'react'
import { Axios } from '../../Api/axios';
import Loading from '../../components/Loading/Loading';
import {Form} from 'react-bootstrap';
import { USER } from '../../Api/Api';

function AddUser() {

  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  },[])


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [role, setRole] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
        const res = await Axios.post(`${USER}/add`, {
            name: name,
            email: email,
            password: password,
            role: role,
      })
        setLoading(false)
        window.location.pathname= '/dashboard/users'
        console.log(res)
    }
    catch(err) 
    {console.log(err)}
}

return (<>
{loading && (<Loading/>)}
<Form className='bg-white w-100 p-5' onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Your Name </Form.Label>
  <Form.Control type="text" placeholder="Your Name..."
  onChange={(e) => setName(e.target.value)}
  value={name} 
  required
  ref={focus}
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="name@example.com" 
  onChange={(e) => setEmail(e.target.value)}
  value={email} 
  required
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="password..." 
  onChange={(e) => setPassword(e.target.value)}
  value={password} 
  required
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <Form.Label>Role</Form.Label>
  <Form.Select 
  onChange={(e) => setRole(e.target.value)}
  value={role} 
  >
    <option disabled value= ''>Select Role</option>
    <option value='1995'>Admin</option>
    <option value='2001'>User</option>
    <option value='1996'>Writer</option>
  </Form.Select>
</Form.Group>
<button disabled={name.length < 1 || email.length < 1 || password.length < 6 || role === ''
        ? true
        : false
        } 
        className='button button-primary'>Save</button>
</Form>
</>
)
}

export default AddUser