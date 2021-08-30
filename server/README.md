# Server for Observer
This project was bootstrapped with [Express application generator](https://expressjs.com/en/starter/generator.html). 
For more information head to [Express.js](https://expressjs.com/). 

This application provides an api for the front-end Observer webpage to access the MongoDB database which stores the "Items" data
## Getting started
This application requires Node.js and can be installed from [Node.js](https://expressjs.com/). \
This application relies on Node modules being installed, these can be installed using the Node package manager 
npm and running these commands in the project directory.
### `npm install express --save`
### `npm install mongodb`
### `npm install http-errors`
### `npm install mongoose`
### `npm install cors`
To connect to the database lines 17 and 18 in app.js will need to be replaced with database username and password.

To start the server use the follow command in project directory which will start the server listening on port 9000 and connect to the MongoDB database.
### `npm start`
##Features
When up and running the server responds to 3 different routes providing various functionality with the database.   
### /get-items route
This route responds to get requests and sends back the entire collection of items.
### /add-item route
This route responds to post requests and adds an item into the database, responding with the Item and its assigned id. 
### /update-item route
This route responds to post requests and updates an item in the database, responding with the updated Item and its assigned id. 