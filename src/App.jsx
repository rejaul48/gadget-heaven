// App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


function App() {
  return (
    <>
      
        <RouterProvider router={routes} />

        {/* ToastContainer to display toast notifications globally */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          transition={Bounce} // or any other transition effect you want to use
        />
     

    </>
  );
}

export default App;
