import React from 'react'
// import '../styles/topBar.css';
import '../App.css'
const TopBar = () => {
  return (
    <div className='topBar primary-text-color'>
      <div className='content'>
        <p>$7500</p>
        <p><a href='https://www.tesla.com/support/incentives#new-vehicles'>Federal Tax Credit</a></p>
        
        <p>Available for new Model 3 and Model Y</p>
      </div>
    </div>
  )
}

export default TopBar