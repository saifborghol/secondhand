const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//importation de bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

//importation de uniqueValidator
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = Schema({
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: false,
		validate: {
			validator: function password1(p) {
				var phone = /^[A-Za-z]\w{7,14}$/;
				return phone.test(p);
			},
			message: 'you must provide a valid password',
		},
	},
});

adminSchema.plugin(uniqueValidator);

adminSchema.pre('save', function (next) {
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

module.exports = mongoose.model('adminModel', adminSchema);
