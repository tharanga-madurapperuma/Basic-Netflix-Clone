import React, { useEffect, useState } from 'react'
import './Nav.css';

const Nav = () => {

    const [show, sethandle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                sethandle(true);
            }
            else{
                sethandle(false);
            }
        });
    }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img 
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'
        />

        <img 
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix Avatar'
        />
      
    </div>
  )
}

export default Nav
