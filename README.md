# Weather-Journal App Project

## Udacity Front End Web Development Professional Nanodegree Program

** The purpose of this Weather-Journal app is to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Features
- Install Node and Express Environment
- Install project Dependencies: (cors package & body-parser package)
- Create API credentials on OpenWeatherMap.com

## Tech

Weather-Journal uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework

## Installation

Weather-Journal App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

```sh
cd weather-journal-app
npm install express body-parser cors
node server.js
```

## Description

First, in server side code "server.js", I started with required dependencies, I added Express to run server and routes. I created an instance of our app using Express. I created a local server with port of 3000. I added a GET request with a route named '/all' to return the JavaScript object in the server. I added a POST request with a route named '/add' to collect and store user data through  HTTP POST request that sends data to the project's endpoint 'projectData'. The callback function in POST request adds the data received from req.body to get some specific data from the API server.
In client side code "app.js", I stored the API Key for OpenWeatherMap in a variable. I created addEventListener method to the generate button with async function to fetch the weather data from the API server and store it in the local server. By chaining another Promise, I ceated an async function to update the UI dynamically according to the data returned by the app route.