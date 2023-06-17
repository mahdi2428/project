import React from "react";
import Navbar from "./component/navbar";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Login from "./login/login";
import { useNavigate } from 'react-router-dom';
function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element = {<Dashbord/>}/>
                        <Route path="Login" element = {<Login/>}/>
                    </Route>
                </Routes>
            </Router>
    )
}
export default App;