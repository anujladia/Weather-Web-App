const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = "b53eec7dc4712979e6d40acb11f09a81";

app.use(express.static('public'));	//this allows us to access all the static files within the public folder
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	// res.send('Hello World');
	res.render('index', {weather: null, error: null});	//render the view and send the equivalent html to the client
});

app.post('/', function(req, res) {	//this is the post route 

	let city = req.body.city;
	let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;

	request(url, function(err, response, body) {
		if(err){
			res.render('index', {weather: null, error: 'Error, Please try again'});	
			// console.log(err);
		} else {
			//console.log("Body: ",body);
			let weather = JSON.parse(body);

			if(weather.main == undefined) {
				res.render('index', {weather: null, error: 'Error, Please try again'});	
			} else {
				let message = "It's "+weather.main.temp+" degrees in "+weather.name;
				res.render('index', {weather: message, error: null});		
			}
			// console.log('Good Morning :', message);
		}
	});
});

app.listen(3000, function() {
	console.log('Listening to port 3000');
});