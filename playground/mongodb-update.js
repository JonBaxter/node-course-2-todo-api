// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5991d26967a72539f0a192a1")
  }, {
    $set: {
      name: 'Jim'
          }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5991d26967a72539f0a192a1")
  }, {
    $inc: {
      age: 10
          }
        }, {
          returnOriginal: false
    }).then((result) => {
      console.log(result);
  });



  // db.close();
});
