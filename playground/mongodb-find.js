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

 // db.collection('Todos').find({
 //   _id: new ObjectID('5846626559aa2e5e1ea75516')
 // }).toArray().then((docs) => {
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs,undefined,2));
 //
 // },(err) => {
 //   console.log('Cannot open document',err);
 // });

 // db.collection('Todos').find().count().then((count) => {
 //   console.log(`Todos Count: ${count} `);
 //    },(err) => {
 //   console.log('Cannot open document',err);
 // });

db.collection('Users').find({name: 'Prasanna'}).toArray().then((docs) => {
  console.log('Users with name Prasanna');
  console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('Cannot open document',err);
});

  //db.close();
});
