import React from "react";
import { ReactDOM } from "react";

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;