import React from "react";
import './App.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import RouterApp from "./pages/Components/Router";
// import RouterApp from "./config/router/router"; 

function App () {
  return(
  <header>
      <RouterApp/>
  <h1>Welcome to User Mannual </h1> 
    <ArrowDownwardIcon />
    <h3>Want to SignIn? Please enter in searchbar <ArrowRightAltOutlinedIcon/> /SignInn </h3>
    <h3>Want to SignUp? Please enter in searchbar <ArrowRightAltOutlinedIcon/> /SignUp </h3>
    <h3>Want to go Dashboard? Please enter in searchbar <ArrowRightAltOutlinedIcon/> /Dashboard </h3>
  </header>
    )
}

export default App;