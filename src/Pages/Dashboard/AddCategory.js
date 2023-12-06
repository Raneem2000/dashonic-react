import React, { useEffect, useRef, useState } from 'react'
import { Axios } from '../../Api/axios';
import Loading from '../../components/Loading/Loading';
import {Form} from 'react-bootstrap';
import { cat } from '../../Api/Api';

function AddUser() {

  // Ref
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus() ;
  },[])
  
const [title, setTitle] = useState('');
const [image, setImage] = useState('');
const [loading, setLoading] = useState(false);

const form = new FormData();
form.append('title', title);
form.append('image' , image);

async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
        const res = await Axios.post(`${cat}/add`,form)
    
        setLoading(false)
        window.location.pathname= '/dashboard/categories'
        console.log(res)
    }
    catch(err) 
    {console.log(err)}
}

return (<>
{loading && (<Loading/>)}
<Form className='bg-white w-100 p-5' onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Your Title </Form.Label>
  <Form.Control type="text" placeholder="Title..."
  onChange={(e) => setTitle(e.target.value)}
  value={title} 
  required
  ref={focus}
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Image</Form.Label>
  <Form.Control type="file" placeholder="Image..." 
  onChange={(e) => setImage(e.target.files.item(0))}
  required
  />
</Form.Group>
<button disabled={title.length < 1
        ? true
        : false
        } 
        className='button button-primary'>Save</button>
</Form>
</>
)
}

export default AddUser