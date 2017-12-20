var mongoose = require("mongoose");

var schema = new mongoose.Schema({ 
	"id": Number,
	"image": String,
	"image_filename": String,
	"brand": String,
	"series_name": String,
	"price": Number,
	"km": Number,
	"type": String,
	"color": String,
	"colorEnglish": String,
	"seat": Number,
	"displacement": String,
	"emission": String,
	"transmission": String,
	"country": String,

	"buydate": String,
	"saler": String,
	"detail": String
});

module.exports = mongoose.model("Car", schema);