import React, { useEffect, useState } from 'react';
import {cat, CAT} from '../../Api/Api';
import { Axios } from '../../Api/axios';
import { Link } from 'react-router-dom';
import TableShow from '../../components/Dashboard/Table';

function Categories() {
  const [categories, setCatategories] = useState([]);
const [deleteCat, setDeleteCat] = useState(false);
  
useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((data) => setCatategories(data.data))
      .catch((err) => console.log(err));
  }, [deleteCat]);

  const header = [
    {
      id: 'title',
      name: 'Title',
    },
    {
      id: 'image',
      name: 'Image',
    },
  ];

  async function handleCat(id) {
    try {
      const res = await Axios.delete(`/${cat}/${id}`);
      console.log(res);
      setDeleteCat((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='bg-white w-100 h-50 p-5'>
      <div className='d-flex algin-items-center justify-content-between'>
        <h2>Table Categories:</h2>
        <Link to='/dashboard/category/add' className='button button-primary mb-1' style={{ backgroundColor: 'gray', textDecoration: 'none' }}>
          Add Categories
        </Link>
      </div>
      <TableShow 
      header={header} 
      data={categories} 
      delete={handleCat} />
    </div>
  );
}

export default Categories;
