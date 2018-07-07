// import and initialize express module
var express = require('express'),
    config = require('./server/configure'),
    app = express();
// set default 
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);
// Create a HTTP server using app object to listen for connections
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
var server= app.listen(app.get('port'), function () {
    console.log('Server up : http://localhost:' + app.get('port'));
});