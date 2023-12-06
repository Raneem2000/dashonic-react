import React from 'react'
import './Welcome.css'
import MultiLineChart from './MultiLineChart' 
import BarChart from './BarChart'
function welcome() {

  return (
    <div className='bg'>
      <div className='welcome'>
    <div className='content-1'>
    <h2>Welcome</h2>
    <p>You have 42 messages and 6 notifications. </p>
    <ul className='custom-list'>
    <li>
        <span className='number'>1</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    <li>
        <span className='number'>2</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    <li>
        <span className='number'>3</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    <li>
        <span className='number'>3</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    <li>
        <span className='number'>4</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    <li>
        <span className='number'>5</span>
        Please contact me
        <span className='time'>09:00 pm</span>
        <div className='line'></div>
    </li>
    </ul>
    </div>
    <div className='content-2'>    
    <MultiLineChart className='linechart'/>
    <div className='price'>
      <span>
        <div>$ 406,100</div>
        <p>here I try to make a beuty Dashboard</p>
      </span>
      <span>
        <div>$ 406,100</div>
        <p>here I try to make a beuty Dashboard</p>
      </span>
      <span>
        <div>$ 406,100</div>
        <p>here I try to make a beuty Dashboard</p>
      </span>
    </div>
    </div>
    <div className='content-3'>
    <h4>Project Beta progress</h4>
    <p>You have two project with not compleated task</p>
    <BarChart/>
    </div>
    </div>
    </div>
  )
}

export default welcome