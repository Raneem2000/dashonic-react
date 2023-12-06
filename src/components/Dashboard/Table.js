import React,{ useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function TableShow(props) {

  const currentUser = props.currentUser || {name: ''};
console.log(props.data)
  const headerShow = props.header.map((item, key_) => (<th key={key_} >{item.name}</th>))
  
  const dataShow = props.data.map((item ,key) => (
  <tr key={key}>
          <td>{key + 1}</td>
    {
      props.header.map((item2, key2) => (
        <td key={key2}>
          {
          item2.id === 'image' 
          ? < img width={'20px'} src={item[item2.id]}
            />
          : item[item2.id] === '1995' 
          ? 'admin'
          :item[item2.id] === '1996'
          ? 'writer'
          : item[item2.id] === '2001'
          ? 'user'
          : item[item2.id] === '1999'
          ? 'Product Manager'
          : item[item2.id]
          }
          { 
          currentUser.name === item[item2.id] && ' (You)'
          }
        </td>
      ))
    }
    <td className='d-flex align-items-center  justify-content-between'>
          <Link to={`${item.id}`}>
            <FontAwesomeIcon icon={faPenToSquare}
            fontSize={'1.1rem'}
            cursor={'pointer'}
            />
          </Link>
          { currentUser.name !== item.name &&
            (
              <FontAwesomeIcon icon={faTrash} 
            fontSize={'1.1rem'}
            color={'red'}
            cursor={'pointer'}
            onClick={() => props.delete(item.id)}
            />
            )
            } 
        </td>
  </tr>
))

  

  return (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        {headerShow}
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {dataShow}
      { props.data.length === 0 
      && (<tr><td colSpan={12} className='text-center'> Loading... </td></tr>)
      // : users.length === 0 && noUser 
      //   ? (<tr><td colSpan={12} className='text-center'> Users Not Found... </td></tr>)
      //   : showUser
        }
    </tbody>
  </Table>
);
}

export default TableShow