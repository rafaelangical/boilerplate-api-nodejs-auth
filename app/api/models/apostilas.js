const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ApostilaSchema = new Schema({
	nome: {
		type: String,
		trim: true,		
		required: true,
	},
	link: {
		type: String,
		trim: true,
		required: true
	},
	categoria: {
		type: Date,
		trim: true,
		required: true
	}
});

module.exports = mongoose.model('Apostila', ApostilaSchema)