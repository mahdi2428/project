import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import Mainpage from './component/mainpage'; 
// import Mainpage1 from './component/mainpage1';
import App1 from './login/login1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1/> */}
    
    <App/>
    {/* <div className='wholepage'>
    <BrowserRouter>
      <Mainpage />
      <Mainpage1 />
    </BrowserRouter>  
    </div> */}
  </React.StrictMode>
);

