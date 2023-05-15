import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import "./styles/reset.scss";
import "./styles/common.scss";
import "./pages/Login/Login.scss";
import "./pages/Main/Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
