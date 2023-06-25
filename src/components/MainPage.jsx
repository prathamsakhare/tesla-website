import React from 'react'
import '../styles/mainPage.css'
import Navbar from './Navbar'
const MainPage = () => {
  return (
    <div className='mainPage'>
      <div className='center-content primary-text-color'>
        <h1>Experience Tesla</h1>
        <p>Schedule a Demo Drive Today</p>
      </div>
      <button className='demo-drive-btn'>Demo Drive</button>
    </div>
  )
}

export default MainPage