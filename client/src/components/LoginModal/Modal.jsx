import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="custom-modal">
            {children}
        </div>,
        document.getElementById('root')
    );
};

export default Modal;