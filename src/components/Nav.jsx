import React, {useEffect, useState} from 'react'
import popcorn from '../assets/popcorn-box-transparent-free-png-3451133062.png'
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Nav = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSignInClick = () => {
        console.log('open modal')
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        console.log('close modal')
        setIsModalVisible(false);
    };

  return (
    <nav>
        <div className="container">
            <div className="row">
                <h1 className='nav__title'>Mega <br /> Movies <br /> Multiverse</h1>
                <Link to={'/'}>
                    <figure className="nav__logo">
                        <img 
                        className='popcorn-logo'
                        src={popcorn} 
                        alt="" />
                    </figure>
                </Link>
                <ul className="nav__link--list">
                    <li className="nav__list--item click">
                        <a href="#" className="item__link--primary" onClick={handleSignInClick} >Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
        {isModalVisible && <LoginModal onClose={handleCloseModal}/>}
    </nav>
  )
};

export default Nav;