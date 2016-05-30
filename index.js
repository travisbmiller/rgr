
import express from 'express';

let app = express();

app.use(express.static(__dirname + '/public'));

var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rgr');


// app.get('/', (req, res) => {
//   res.send("hello")
// });

app.listen(3000, x => console.log("listening on port 3000"));