const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const router = require('./routers/index');
const app = express();

// mongoose connect
mongoose.connect('mongodb://THEMAX:2021!@cluster0-shard-00-00.xi0kv.mongodb.net:27017,cluster0-shard-00-01.xi0kv.mongodb.net:27017,cluster0-shard-00-02.xi0kv.mongodb.net:27017/test?replicaSet=atlas-5lziqm-shard-0&ssl=true&authSource=admin', {useNewUrlParser:true , useUnifiedTopology:true});

//mongoose set
const db = mongoose.connection;
db.on('open', () => {
    console.log('mongoose run');
});

db.on('error', (err, data) => {
    console.log('mongoose err run', err);
});

//body-parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set views files
app.set('view engine', 'pug');
app.set('views' , 'views');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));


// run index
app.use(router);



app.listen(port, (err,data)=>{
    console.log(`server has been started on http://localhost:${port}`); 
})