var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
var api = require('./server/routes/api');


//parsers 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.options('*', cors());

app.use(cors());
//set api routes
app.use('/api', api);
//return other routes to angular index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
//set port
var port = process.env.PORT || 5000;
app.set('port', port);
//create the http server
const server = http.createServer(app);
server.listen(port, () => console.log(`running on localhost:${port}`));