import React, { useEffect, useState } from 'react';
import {PRO, Pro} from '../../Api/Api';
import { Axios } from '../../Api/axios';
import { Link } from 'react-router-dom';
import TableShow from '../../components/Dashboard/Table';

function Products() {
  const [products, setProducts] = useState([]);
const [deleteProduct, setDeleteProduct] = useState(false);
  
useEffect(() => {
    Axios.get(`/${PRO}`)
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, [deleteProduct]);

  const header = [
    {
      id: 'title',
      name: 'Title',
    },
    {
        id: 'description',
        name: 'Description',
    },
    {
        id: 'rating',
        name: 'Rating',
    },
    {
        id: 'price',
        name: 'Price',
    },
  ];

  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`/${Pro}/${id}`);
      console.log(res);
      setDeleteProduct((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='bg-white w-100 h-50 p-5'>
      <div className='d-flex algin-items-center justify-content-between'>
        <h2>Table Products:</h2>
        <Link to='/dashboard/product/add' className='button button-primary mb-1' style={{ backgroundColor: 'gray', textDecoration: 'none' }}>
          Add Products
        </Link>
      </div>
      <TableShow 
      header={header} 
      data={products} 
      delete={handleDelete} />
    </div>
  );
}

export default Products;
