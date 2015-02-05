var mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost/social', {server: {auto_reconnect: true}},function(){
	console.log("mongoose connected");
	console.log(mongoose.connection.host);
	console.log(mongoose.connection.port);
});
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});



module.exports = mongoose;