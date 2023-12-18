import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

import "./EditProfile.css";

function Profile() {
  const [UserList, setUserList] = useState([]);
    
  let navigate = useNavigate();
    
const getUser = () => {
  axios.get(`https://recibook.space/profile.php`, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', } })
};
    
  return (
   <div className="UserInform">
   <button onClick={getUser} className="btn2" >
		Користувач
		</button>
   
   {UserList.map((val, key) => {
          
      <div className="User">
      <div>
      <h4>Прізвище: {val.first_name}</h4>
      <h4>Ім'я: {val.last_name}</h4>
      <h4>Дата народження: {val.birth}</h4>
      <h4>Email: {val.email}</h4>
      <h4>Short Bio: {val.shortbio}</h4>
      <h4>Улюблені страви: {val.favoriteFood}</h4>
      </div>
               
      </div>
    
   })}
   <button  onClick={() => {
            navigate ("/edit") ;
        }} className="btn2">
    Редагувати
    </button>
    
    </div>
    );
  }
 export default Profile;