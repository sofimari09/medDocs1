import React from 'react';
import { useState } from 'react';
import "./EditProfile.css";
import axios from 'axios';

 function Edit() {


const [shortbio, setshortbio] = useState('');
const [favoriteFood, setfavoriteFood] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);

// Handling the shortbio change
const handleshortbio = (e) => {
	setshortbio(e.target.value);
	setSubmitted(false);
};

// Handling the favoriteFood change
const handlefavoriteFood = (e) => {
	setfavoriteFood(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
    const edit = {
		short_bio: shortbio,
        fFood: favoriteFood
	  };
	  axios.post(`https://recibook.space/EditProfile.php`, {
		edit }, {
		  withCredentials: true,
		  headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  }
		  })
	setSubmitted(true);

	
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Зміни збережено!</h1>
	</div>
	);
};

return (
	<div className='Edit'>
	
	<div>
		<h3>Редагування</h3>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		

		<label className="labelEdit">Short Bio</label>
		<textarea
		className="input1"
		type="shortbio"
		rows='4'
		cols='50'
		value={shortbio}
		onChange={handleshortbio} />

		<label className="labelEdit">Улюблені страви</label>
		<textarea
		className="input1"
		type="favoriteFood"
		rows='4'
		cols='50'
		value={favoriteFood}
		onChange={handlefavoriteFood} 
		 />

		<button onClick={handleSubmit} className="button" type="logIn">
		Змінити
		</button>		
	</form>
	</div>
);
}

export default Edit