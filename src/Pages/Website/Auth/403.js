import React from 'react'
import './403.css'
import { Link } from 'react-router-dom'

function _403({role}) {
  return (
    <div className='text-wrapper'>
        <div className='title' data-content={404} >
        403 - ACCESS DENIED!        
        </div>
        <div className='subtitle'>
            Oops, You don't have permission to access this page.
        </div>
        <Link  
        className='mt-4 text-center fs-5 button button-primary'
        to={
          role === '1996'
          ? '/dashboard/writer'
          : '/'
        } 
        > 
        {role === '1996' ?
        ('Go to Writer Page') :
        ('Go to Home Page')
        }
        
        </Link>
    </div>
  )
}

export default _403