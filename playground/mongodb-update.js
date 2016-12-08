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

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5848fbc89f362a4230223e63')},
  // {
  //   $set:{
  //         completed: true
  //       }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
db.collection('Users').findOneAndUpdate({name: 'Akshith'},
{
  $set: {
    name: 'Vikram'
  },
  $inc : {
    age: 1
  }
},
{
  returnOriginal:false
}).then((result) => {
  console.log(result);
});


  //db.close();
});
