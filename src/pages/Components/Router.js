import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import SignInn from "../../pages/SignInn";
import SignUp from "../../pages/SignUp";
import DashBoard from "../../pages/DashBoard";

function RouterApp () {
    return(
    <Router>
        <Routes>
            <Route path="/SignInn" element={<SignInn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Dashboard" element={<DashBoard/>}/>
        </Routes>
    </Router>
    
      )
  }
  
  
  export default RouterApp;