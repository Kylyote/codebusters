import React, { useState } from 'react';
import Modal from './Modal';
import Form from './Form';

function Main() {
    const [showModal, setShowModal] = useState(false);

    return (
            <>
                <div>
                    <button onClick={() => setShowModal(true)}>Login</button>
                    {showModal && (
                        <Modal>
                            <button className='modal-cancel non-btn' onClick={() => setShowModal(false)}>X</button>
                            <Form />
                        </Modal>
                    )}
                </div>
            </>
    )
};

export default Main;