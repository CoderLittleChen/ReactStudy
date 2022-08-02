//引入React
import React from 'react';
//引入React-Dom
import ReactDOM from 'react-dom/client';

// import { BrowserRouter } from 'react-router-dom';

//引入App
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
