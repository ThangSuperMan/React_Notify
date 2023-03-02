import React from 'react'
import { ToastContainer ,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  let toastId = React.useRef(null);

  const notify = () => {
    toastId = toast.warn("Warnning in here");
    console.log(`toastID: ${toastId}`)
  }

  const updateNotify = () => {
    toast.update(toastId, {
      render: "Just update the toast",
      type: toast.TYPE.SUCCESS,
      closeButton: true,
      closeOnClick: true,
      autoClose: 4000,
    })
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={notify}>Button notify</button>
      {/* <ToastContainer /> */}
      <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
      />
      <button onClick={updateNotify}>Update the notify</button>
    </div>
  );
}

export default App;
