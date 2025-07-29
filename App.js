import React from "react";
import ReactDOM from "react-dom/client";

// JSX --> (transpiled before it reaches the JS Engine -- Parcel ) -- Babel.
const title = (
    <h1>Namaste React 🚀</h1>
);

const number = 10000;

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1>Namaste React 🚀 Functional Component</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);