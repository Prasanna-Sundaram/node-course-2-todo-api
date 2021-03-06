const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '584b73691fdc6a540144de35';

// if(!ObjectID.isValid(id)){
//   console.log('ObjectID is not valid');
// }

// Todo.find({
//   _id: id
// }).then ((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then ((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User by ID',user);
}).catch((e) => {
  console.log(e);
});
