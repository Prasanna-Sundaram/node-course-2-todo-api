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

 // db.collection('Todos').insertOne({
 //   text: 'something to do',
 //   completed: false
 // },(err,result) => {
 //   if(err){
 //     return console.log('unable to insert',err);
 //   }
 //   console.log(JSON.stringify(result.ops,undefined,2));
 // });

// db.collection('Users').insertOne({
//     name: 'Prasanna',
//     age: 38,
//     location: 'Auckland'
// },(err,result) => {
//   if(err)
//   {
//     return console.log('unable to insert',err);
//   }
//   //console.log(JSON.stringify(result.ops,undefined,2));
//   console.log(result.ops[0]._id.getTimestamp());
// });


  db.close();
});
