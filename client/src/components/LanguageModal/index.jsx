import React, { useState } from 'react';
import Form from './Form';
import Modal from './Modal';

function LanguageMain() {
    const [showModal, setShowModal] = useState(false);

    return (
            <>
                <div>
                    <button onClick={() => setShowModal(true)}>Add Languages</button>
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

export default LanguageMain;