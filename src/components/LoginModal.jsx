import React from 'react';

const LoginModal = () => {
    
  return (
    <div>
        <div className="login__modal">
        <div className="modal__input--container">
            <i className="fa-solid fa-xmark click"></i>
            <div className="modal__input--row">
                <h3 className="modal--title">Start Streaming!</h3>
                <form id="login__form" action="">
                    <div className="form__item">
                        <label className="form__item--label">Email:</label>
                        <input className="modal--input" type="email" placeholder="email"></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Password:</label>
                        <input className="modal--input" type="password" placeholder="password"></input>
                    </div>  
                </form>
                <button className="login--action">GO!</button> 
            </div>
        </div>
    </div>

    </div>
  )
};

export default LoginModal;