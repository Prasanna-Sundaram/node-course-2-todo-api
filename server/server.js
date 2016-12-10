var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.listen(3000, () => {
  console.log('Started on port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//mongoose.connect('mongodb://localhost:27017/User');
//
//   var newTodo = new Todo({
//     // text: 'Cook dinner'
//       text: '  Edit this video   '
//   });
//
//
//   newTodo.save().then( (doc) => {
//     console.log('Saved todo',doc);
//   },(e) => {
//     console.log('unable to save todo');
//   });

  // var newTodo1 = new Todo({
  //   text: 'Rent DVDs',
  //   completed: true,
  //   completedAt: 081220162115
  //
  // });
  //
  // newTodo1.save().then((doc) => {
  //   console.log('Saved todo1',doc);
  // },(e) => {
  //   console.log('unable to save todo1');
  // });


// var newUser = new User({
//   email: '   Hello@mangoose.com   '
// })
//
// newUser.save().then( (doc) => {
//   console.log('saved User', doc);
// }, (e) => {
//   console.log('unable to save user');
// })
