import React, { useState } from 'react';
import Modal from './Modal';
import ReviewForm from './Form';

function ReviewMain() {
    const [showModal, setShowModal] = useState(false);

    return (
            <>
                <div>
                    <button onClick={() => setShowModal(true)}>Add Review</button>
                    {showModal && (
                        <Modal>
                            <button className='modal-cancel non-btn' onClick={() => setShowModal(false)}>X</button>
                          <ReviewForm />
                      </Modal>
                    )}
                </div>
            </>
    )
};

export default ReviewMain;