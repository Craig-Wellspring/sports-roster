import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './api/apiKeys';
// import { Router } from 'react-router-dom';
import Initialize from './components/Initialize';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <Initialize />
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();