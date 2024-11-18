import React from 'react';
import "./Loader.css";

const Loader = () => {
  const LoaderImg ="https://raw.githubusercontent.com/prabinmagar/booklib-app-using-react-js-and-openlib-api/54d868a4bc44cbc56659fc3c2c0fadc6e894b536/src/images/loader.svg"
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader