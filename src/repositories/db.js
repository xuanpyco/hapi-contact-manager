var mongoose = require('mongoose');
console.log('connecting to db')
mongoose.connect('mongodb://localhost/27017/demodb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('connection is ok');
})

module.exports = mongoose;