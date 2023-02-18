const mongoose = require("mongoose")
const url = process.env.MONGO_DB_CONNECTION_STRING
const connect = mongoose.connect("mongodb://0.0.0.0:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect
  .then(db => {
    console.log("connected to db")
  })
  .catch(err => {
    console.log(err)
  })