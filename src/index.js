import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import StarRating from "./StarRating";
import TextExpanderMain from "./TextExpander";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="black" size="28" onSetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextExpanderMain />
    {/* <App /> */}
    {/* <StarRating
      maxRating={"ssss"}
      messages={["terrible", "bad", "ok", "good", "great"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} color="blue" size={23} className="test" />
    <Test /> */}
  </React.StrictMode>
);
