import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import StarRating from "./StartRating";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating size={24} />
    <StarRating size={60} color="#f00" />
  </React.StrictMode>
);

