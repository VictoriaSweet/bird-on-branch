
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
app.use(express.json()) 
const data = require('./guests.json'); 
const initDatabase = require('./schema/create');
app.use(cors()); 
const guest = require('./guests');
// REST API to get all products details at once 
// With this api the frontend will only get the data 
// The frontend cannot modify or update the data 
// Because we are only using the GET method here. 

app.get("./guests.js", (req, res) => { 
	res.json(data) 
}); 


const port = process.env.PORT || 5000;
app.listen(port, () => { 
	console.log(`Server started on port ${port}`); 
}); 
console.log(guest);
initDatabase();


