// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
  
 // Setup a Server
const port = 3000;
const server = app.listen(port , function listening(){
console.log(`running localhost: ${port}`)
})

// Respond with projectData when a GET request is made to the all page
app.get('/all', function (req, res) {
    res.send(projectData);
  })

  // POST method route to collect and store user data 
app.post('/add',(req, res)=>{
  // To get specific data from server into the body request
  console.log(req.body);
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.weatherDescription = req.body.weather;
  projectData.content= req.body.content;
  res.send(projectData);
  // Or this in case to get all data 
  // projectData ={...req.body}
  // res.send();
})

