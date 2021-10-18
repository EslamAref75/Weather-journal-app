/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = '182ebe01cb322aaf7699207ef95ee280';
const currentInfo = document.getElementById('currentInfo');
const generateBtn = document.getElementById('generate');

// Create addEventListener() to generate button 
generateBtn.addEventListener('click', performFunction);

async function performFunction(event){
  try{
  event.preventDefault();

// Store the value of the feeling contnent in a variable
  const content = document.getElementById('feelings').value;

// Store the zip code value in the variable
  const zipCode = document.getElementById('zip').value;

// Store the API URL in the variable
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

  // Addnig fetch to make a dynamic URL query
  // Build the url into a fetch call
const res = await fetch(baseUrl)
// console.log(res);
 
// parse the response into json string
const weatherData = await res.json();
const temp = weatherData.main.temp;
const weatherDescription = weatherData.weather['0'].description;
        // console.log(weatherData.main.temp);
        // console.log(weatherDescription);

        // Chain a Promise that makes a POST request to add the API data, as well as data entered by the user.
 await fetch('/add', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            temp: temp,
            date: newDate,
            weather: weatherDescription,
            content: content
        }),
      })

      // Use then method to return a promise to chain the function to update the UI
      .then(function(){
        updateUi();
      })

      // add a fetch method to check response in GET route
      const newData = await fetch('/all');
      const finalResult = await newData.json();
      // console.log(finalResult)
     
    //  Reset the input fields 
      currentInfo.reset()

    }catch(error){
      alert('Please enter a valid US zip code')
console.log('error:', error);
currentInfo.reset()
    }
};

// Create a function to update the UI after updating the data successfully
const updateUi = async() => {
  const request = await fetch('/all');
  
      const receivedData = await request.json();
      // console.log(receivedData);

      // retrieve data and update the values to reflect dynamically  
          document.getElementById('date').innerHTML = receivedData.date;
          document.getElementById('temp').innerHTML = receivedData.temp + ' <sup>o</sup>C';
          document.getElementById('weatherDes').innerHTML= receivedData.weatherDescription;
          document.getElementById('content').innerHTML = receivedData.content;
};


