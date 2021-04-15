const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//importation de bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

//importation de uniqueValidator
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	surName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: function ValidateEmail(v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				//w{2,3} lazemha tkoun fila5er .org .com .tn ya3ni . w ba3édha 7aja tetkawén par 2 ou 3 caractéresZZZ
			},
			message: 'email is invalid',
		},
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: function password1(p) {
				var phone = /^[A-Za-z]\w{7,14}$/;
				return phone.test(p);
			},
			message: 'you must provide a valid password',
		},
	},
	tel: {
		type: Number,
		// unique: true,
	},
	image: {
		type: String,
	},
	resetLink: {
		type: String,
	},
	order_id: [
		{
			type: Schema.Types.ObjectId,
			ref: 'orderModel',
		},
	],
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function (next) {
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

module.exports = mongoose.model('userModel', userSchema);
