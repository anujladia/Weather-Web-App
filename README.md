# Weather Web Application 

This is a web application that gives us a interactive one page view for knowing the weather of different cities at one go.  
This is a nice small project for the Node JS beginners to further strengthen their learning with this small application.  

### Topics we cover  
- Handling API requests and responses  
- Express   
- Setting up server with Express  
- Templating engine View Engine  

### NPM  
npm is a NodeJS package manager. As its name would imply, you can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.  

### Initilizing the Project  
Pull this code on your system or just download the code.  
Then to make this project run, you need to initialize the node modules.  
This is done by going to the directory location on command prompt and running the code there. `npm init`  
*node_modules* folder will be created in folder.  
For starting a new project also you need to use the command npm init. This will create a *package.json* file for you.  

### API  
We use the Open Weather Map API for getting the weather data.  
You can get the APIs from https://openweathermap.org/api  
Subscribed to its 'Current weather data' API and got a key from it.  

### Express 
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  
Use npm to install express in your code.  
`$ npm install express --save`  

It gives us a easy way to setup our server.   
```
    var express = require('express')
    var app = express()

    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function (req, res) {
      res.send('hello world')
    })
```

It also sets up our view engine.  
```
  app.set('view engine', 'ejs');
```

### View Engine - EJS
For applications that need quick templating, there are many options that we can use. *Jade* comes as the view engine for Express by default. *EJS* is one alternative does that job well and is very easy to set up.  
Go through this site to know more about EJS https://www.npmjs.com/package/ejs

`$ npm install ejs`  


Thus all the pieces are then set together to get the application up and running. Take help of the application whenever needed else try to duplicate the code on your own.


Hope so you got something new to learn here.  
Thank you!



