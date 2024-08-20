import React, {useEffect, useState} from 'react'
import popcorn from '../assets/popcorn-box-transparent-free-png-3451133062.png'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="row">
                <figure className="nav__logo">
                    <img 
                    className='popcorn-logo'
                    src={popcorn} 
                    alt="" />
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__list--item click login">
                        <a href="#" className="item__link item__link--primary">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
};

export default Nav;