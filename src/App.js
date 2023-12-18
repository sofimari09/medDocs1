import React from 'react'
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import Regist from './Components/LogIn/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import AddRecipe from './Components/pages/AddRecipe/NewRecipe';
import Search from './Components/pages/Search';
import Edit from './Components/EditProfile/EditProfile';
import Profile from './Components/EditProfile/Profile';
import LogOut from './Components/LogIn/LogOut';
import HomePage from './Components/pages/HomePage';

const App = () => {
  return (
    <Router>
    <NavBar/>

     <Routes>
      <Route  path = "/home" element = {<HomePage/>} />
      <Route  path = "/newrecipe" element = {<AddRecipe/>} />
      <Route  path = "/" element = {<Search/>} />
     
      <Route  path = "/logout" element = {<LogOut/>} />
      <Route  path = "/login" element = {<LogIn/>} />
      <Route  path = "/regist" element = {<Regist/>} />
      <Route  path = "/profile" element = {<Profile/>} />
      <Route  path = "/edit" element = {<Edit/>} />

     </Routes>
    </Router> 

  );
}

export default App;