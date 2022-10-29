import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmtRaW7AF6-S8koEBXssf_nj3p1jkn3A4",
  authDomain: "cart-app-7b4ff.firebaseapp.com",
  projectId: "cart-app-7b4ff",
  storageBucket: "cart-app-7b4ff.appspot.com",
  messagingSenderId: "73887577525",
  appId: "1:73887577525:web:fa1e4fed8f6b290e2055fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
