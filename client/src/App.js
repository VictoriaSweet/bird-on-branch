
import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import './App.css'; 

function App() { 
	const [data, setData] = useState(); 

	useEffect(() => { 
		axios.get('http://localhost:5000/guests').then( 
			response => { 
				setData(response.data); 
			} 
		).catch(error => { 
			console.error(error); 
		}) 
	}, []) 

	return ( 
		<div className="App"> 
			{ 
				<div className='guests.info'> 
					{data?.map((data) => { 
						return ( 
							<div key={data.id}> 
								<div className='guests'/> 
								<h1>{data.first_name}</h1> 
								<p>{data.last_name}</p> 
								<p>{data.address}</p> 
								<p>{data.RSVP}</p> 
								<p>{data.plus_one}</p> 
							</div> 
						); 
					}) 
					} 
				</div> 
			} 
		</div> 
	); 
} 
export default App; 

