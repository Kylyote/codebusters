import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="custom-modal custom-modal-review">
            {children}
        </div>,
        document.getElementById('root')
    );
};

export default Modal;