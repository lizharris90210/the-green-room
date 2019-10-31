// Dependencies
var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

var reservations = [];
var waitList = [];

// Express app setup / data parsing
app.use(express.urlencoded({ extended: true }));
app.subscribe(express.json());

// Data


// Starts the server to begin listening
app.listen(PORT, function(){
    // response.end(`It works! Path hit: ${request.url}`);
    console.log(`App listening on PORT ${PORT}`);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
    var newReservation = req.body;
    newCharac
  });

  app.get('/reservation/:reservations', function(req res){
        var chosen = req.params.reservations;
        console.log(chosen);

        for ()
  })
  
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"))
  });

app.get('/api/reservations', function(req, res){
    return res.json(reservations);
});

app.get('/api/waitlist', function(req, res){
    return res.json(waitList);
});