import React from 'react'
import '../styles/navBar.css';
import teslalogo from '../assets/teslalogo.png'
import { HashLink } from 'react-router-hash-link';
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
  return (
    <div className='navBar'>
        <div className='logo'><img src={teslalogo} /></div>
        <div className='models navbtns'>
          <HashLink to='#modelS' className='link'><button>Model S</button></HashLink>
          <HashLink to='#model3' className='link'><button>Model 3</button></HashLink>
            <button>Model X</button>
            <HashLink to='#modelY' className='link'><button>Model Y</button></HashLink>
            <button>Solar Roof</button>
            <button>Solar Panels</button>
            <button>Powerwall</button>
        </div>
        <div className='navbtns'>
            <button>Shop</button>
            {
              isAuthenticated && <button>{user.name}</button>
            }
            {
              isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> : <button onClick={() => loginWithRedirect()}>Log In</button>
            }


            
            
            <button>Menu</button>
            
        </div>
    </div>
  )
}

export default Navbar