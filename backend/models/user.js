'use strict';

var mongoose = require('mongoose');

var userModel = function() {
	var userSchema = mongoose.Schema({
		firstName : String,
		lastName : String,
		email : String,
		age : Number
	});

	return mongoose.model('User', userSchema);
}


module.exports = new userModel();