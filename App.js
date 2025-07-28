import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child", key: "1" },
            [
                React.createElement("h1", { key: "1.1" }, "I am H1 tag!"),
                React.createElement("h2", { key: "1.2" }, "I am H2 tag!")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2", key: "2" },
            [
                React.createElement("h1", { key: "2.1" }, "I am H1 tag!"),
                React.createElement("h2", { key: "2.2" }, "I am H2 tag!")
            ]
        )
    ]
);


// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);