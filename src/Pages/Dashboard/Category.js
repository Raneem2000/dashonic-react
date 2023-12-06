import { Axios } from '../../Api/axios';
import Loading from '../../components/Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import { cat } from '../../Api/Api';
import { useEffect, useState } from 'react';

function User() {
   
const [title, setTitle] = useState('');
const [image, setImage] = useState('');
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);

const form = new FormData();
form.append('title', title);
form.append('image' , image);

    const nav = useNavigate();

    const {id} = useParams()
    // const id  = Number(window.location.pathname.replace('/dashboard/categories/',''));
    // console.log(id)

    useEffect(() => {
      setLoading(true);
      Axios.get(`/${cat}/${id}`)
          .then((data) => {
              setTitle(data.data.title);
              setLoading(false);
          })
          .then(() => setDisable(false)) // Enable the button after data is loaded
          .catch(() => nav('/dashboard/categories/page/404', {replace : true}));
  }, []);
  
    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        try{
            const res = await Axios.post(`${cat}/edit/${id}`,form)
            setLoading(false)
            window.location.pathname= '/dashboard/categories'
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
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Image</Form.Label>
  <Form.Control type="file" placeholder="Image..." 
  onChange={(e) => setImage(e.target.files.item(0))}
  required
  />
</Form.Group>
<button disabled={disable} className='button button-primary'>Save</button>

</Form>
  </>
  )
}
export default User