import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal';


const Footer = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const toggleModal = () => {
        setIsInfoModalOpen(!isInfoModalOpen);
      };

  return (
    <footer className='footer'>
        <div className="footer__container">
            <div className="footer__row">
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <Link className='footer__link' onClick={toggleModal} >About</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' to='/'>Home</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' onClick={toggleModal} >Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="copyright--box">
                <p>Copyright © 2024</p>
            </div>
        </div>
        {isInfoModalOpen && <InfoModal isOpen={isInfoModalOpen} onClose={toggleModal}/>}
    </footer>
  )
}

export default Footer