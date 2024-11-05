// react toastify import
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showWarnToast = (message, type = 'warn') => {
    toast[type](message, {
        position: "top-right",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
        style: { color: "#000" },
    });
};

// Success toast easily handle with function
const showSuccessToast = (message, type = 'success') => {
    toast[type](message, {
        position: "top-right",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
        style: { color: "white" },
    });
};

export {showSuccessToast,showWarnToast}