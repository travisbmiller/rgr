
import express from 'express';
import Link from './api/models/link';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();
let mongo = require('mongodb');
let mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use('/graphql', GraphQLHTTP({
  schema: schema,
  graphiql: true,
}))
mongoose.connect('mongodb://localhost/rgr', (err) => {
  if (err) throw err;
  console.log("connect to db");
  app.listen(3000, x => console.log("listening on port 3000"));
});


app.get('/links', (req, res) => {
  // const newLink = new Link({title: "web 3", url: "www.go3.com"});
  // newLink.save(function (err, link) {
  //   if (err) console.log(err);
  //   res.send(link);
  // })

  Link.find({}, (err, links) => {
    if (err) console.log(err)
    res.send(links)
  })

});

//app.listen(3000, x => console.log("listening on port 3000"));