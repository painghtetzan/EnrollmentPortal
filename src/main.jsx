import React from "react"
import ReactDom from "react-dom/client"
import App from "./components/App"
import {HashRouter} from "react-router-dom"
import "./style.css"
const root = ReactDom.createRoot(document.getElementById("app"))


root.render(
  <React.StrictMode>
    <HashRouter >
    <App />
    </HashRouter>
  </React.StrictMode>
)