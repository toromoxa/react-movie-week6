import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const LoginModal = ({ onClose }) => {
  return (
    <div>
      <div className="login__modal">
        <div className="modal__input--container">
          <ClearIcon
            sx={{ fontSize: 30 }}
            className="xmark click"
            onClick={onClose}
          />
          <div className="modal__input--row">
            <h3 className="modal--title">Start Streaming!</h3>
            <form id="login__form" action="">
              <div className="form__item">
                <label className="form__item--label">Email:</label>
                <input
                  className="modal--input"
                  type="email"
                  placeholder="email"
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Password:</label>
                <input
                  className="modal--input"
                  type="password"
                  placeholder="password"
                ></input>
              </div>
            </form>
            <button className="login--action" onClick={onClose}>
              GO!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
