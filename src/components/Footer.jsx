import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container">
            <div className="footer__row">
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <Link className='footer__link' >About</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' to='/'>Home</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' >Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer