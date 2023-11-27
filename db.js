const MongoClient = require('mongodb').MongoClient;


const url1 = "mongodb://localhost:27017/";
const url2 = "mongodb+srv://venkateshavala330:Venkatesh%401@cluster0.gnv4x2o.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(url2, (err, client)=>{
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
}

console.log("db connected");
  const app = require('./app');
  app.listen(8000,()=>{
  console.log("server listening on 8000");
})
    
})