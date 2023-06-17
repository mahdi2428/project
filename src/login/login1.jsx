import React from "react";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import Login from "./login";
import App from "../App";

export default function App1(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}>
                    <Route path="App" element={<App/>}/>
                </Route>
            </Routes>
        </Router>
    )
}