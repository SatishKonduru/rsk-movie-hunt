import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import StarRating from "./StartRating";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />
      <h3>This Movie was rated {movieRating} Starts</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);

