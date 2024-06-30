import React from 'react';
import style from '../Modal/modal.module.css'

const Modal = ({ message, onClose }) => {
  return (
    <>
      <div onClick={onClose}>
        <p>{message}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  );
};

export default Modal;
