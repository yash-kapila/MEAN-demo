var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('contacts', ['contactlist']);	// db, [collection]
var mongodb = require('mongodb');

app.use(express.static('./app'));

// parse application/json
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
	console.log("Inside GET contactlist");
	db.contactlist.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/addcontact', function(req, res) {
	console.log("Inside POST addcontact");
	db.contactlist.save(req.body.params.contact, function(err, docs) {
		console.log(docs);
		res.json(docs);
	});	
});

app.post('/deletecontact', function(req, res) {
	console.log("Inside DELETE contact");
	db.contactlist.remove({_id: new mongojs.ObjectId(req.body.params._id)}, function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.put('/updatecontact', function(req, res) {
	console.log("Inside UPDATE contact");
	db.contactlist.update(
		{ _id: new mongojs.ObjectId(req.body.params.contact._id) }, 
		{ $set:{name: req.body.params.contact.name, email: req.body.params.contact.email, number: req.body.params.contact.number} }, 
		function(err, docs) {
			console.log(docs);
			res.json(docs);
		});
});

app.listen(8080, function () {
	console.log("Listening on port 8080");
});