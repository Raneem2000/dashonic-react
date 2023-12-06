import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { USER } from '../../Api/Api';
import { Axios } from '../../Api/axios';
// import { useParams } from 'react-router-dom'; 
import Loading from '../../components/Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
function User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('');

    const nav = useNavigate();

    const {id} = useParams()
    // const id  = Number(window.location.pathname.replace('/dashboard/users/',''));
    // console.log(id)

    useEffect(() => {
      setLoading(true);
      Axios.get(`/${USER}/${id}`)
          .then((data) => {
              setEmail(data.data.email);
              setName(data.data.name);
              setRole(data.data.role);
              setLoading(false);
          })
          .then(() => setDisable(false)) // Enable the button after data is loaded
          .catch(() => nav('/dashboard/users/page/404', {replace : true}));
  }, []);
  
    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        try{
            const res = await Axios.post(`${USER}/edit/${id}`, {
                name: name,
            email: email,
            role: role,
          })
            setLoading(false)
            window.location.pathname= '/dashboard/users'
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
        <option value='1999'>Product Manager</option>
      </Form.Select>
    </Form.Group>
    <button disabled={disable} className='button button-primary'>Save</button>
  </Form>
  </>
  )
}
export default User