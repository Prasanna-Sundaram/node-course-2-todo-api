// const MongoClient = require('mongodb').MongoClient;

//Object destructuring - ES6 code

const {MongoClient,ObjectID} = require('mongodb');
//
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
//   console.log(result);
//});
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name:'Prasanna'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('58465ed1384b120348e6c6e4')}).then((result) => {
  console.log(result);
});

  //db.close();
});
