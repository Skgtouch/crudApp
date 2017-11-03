var app = require('express')();
var User = require('../models/user');

app.get('/users', function(req, res) {

	User.find({}, function(err, users) {
		if(err) throw err;

		res.send(users);
	});
});

app.get('/user', function(req, res) {
	var id = req.query.userId;

	User.find({ _id: id }, function(err, user) {
		if(err) throw err;
		
		res.send(user[0]);
	});
});

app.delete('/user', function(req, res) {
	var userId = req.query.userId;
	console.log(userId)

	User.findByIdAndRemove(userId, function(err, user) {
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "The request was not completed. User with id " + user._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "User successfully deleted",
				id: user._id
			});
		}
	});
});

app.post('/user', function(req, res) {
	var userData = req.body.userData;
	var user = new User(userData);
	user.save(function(err, createdUserObject) {
		if(err) {
			res.send({
				success: false,
				message: "User not added"
			});
		} else {
			res.send({
				success: true,
				message: "User successfully added",
				user: createdUserObject
			});
		}
	});
});

app.put('/user', function(req, res) {
	var userData = req.body.userData;

	User.findById(userData.id, function(err, user) {
		if(err) {
			res.send(err);
		} else {
			user.firstName = userData.firstName;
			user.lastName = userData.lastName;
			user.email = userData.email;
			user.age = userData.age;

			user.save(function(err, user) {
				if(err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "User successfully updated"
					});
				}
			});
		}
	});
});

module.exports = app;