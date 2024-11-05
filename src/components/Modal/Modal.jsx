import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ totalPrice, isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        onClose();  
        navigate('/');  
    };

    return (
        <>
            {isOpen && (
                <dialog id="my_modal_1" className="modal" open>
                    <div className="modal-box">
                        <div className="flex justify-center items-center">
                            <img src="https://i.imgur.com/EXlOW8z.png" alt="success img" />
                        </div>
                        <h3 className="font-bold text-2xl mt-4 text-center">Payment Successful</h3>
                        <div className="text-center mt-4">
                            <h3 className="text-lg text-black text-opacity-55 font-semibold">Thanks for purchasing.</h3>
                            <p className="text-lg text-black text-opacity-55 font-semibold">Total: ${totalPrice}</p>
                        </div>
                        <div className="modal-action flex justify-center items-center">
                            <button className="btn px-24 text-lg font-semibold" onClick={handleNavigateToHome}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default Modal;
