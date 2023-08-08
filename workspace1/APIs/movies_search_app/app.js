var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "https://www.omdbapi.com/?apikey=9031f736&s=" + query;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200) {
			//var results = JSON.parse(body)
			var data = JSON.parse(body)//Convert 'results' to 'data' for clarity
			//res.send(results["Search"][0]);//filter top result only"0"
			//res.render("results");//to render results to the ejs file you just created
			res.render("results", {data: data});
		}
	});
});
//Run http://localhost:3000/results on browser after running the file
app.listen(process.env.PORT || 3000, process.env.IP || "localhost", function(){
	console.log("Movie App has started!!");
});
