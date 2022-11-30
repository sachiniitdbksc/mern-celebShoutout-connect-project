import React from "react";
// import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
const element = <App />;
root.render(element);

if (module.hot) {
	module.hot.accept();
}
