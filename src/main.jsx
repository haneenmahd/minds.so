import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import Info from "./pages/Info";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
