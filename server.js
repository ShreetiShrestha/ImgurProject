// import and initialize express module
var express = require('express'),
    config = require('./server/configure'),
    app = express();
    mongoose = require ('mongoose');
// set default 
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect ('mongodb://localhost/imgPloadr');
mongoose.connection.on('open',function(){
    console.log('Mongoose connected.');
});
// Create a HTTP server using app object to listen for connections
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
var server= app.listen(app.get('port'), function () {
    console.log('Server up : http://localhost:' + app.get('port'));
});

