const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;
const router = require('./routers/index');
const app = express();

// mongoose connect
mongoose.connect('mongodb+srv://THEMAX:2021!@cluster0.xi0kv.mongodb.net/test', {useNewUrlParser:true , useUnifiedTopology:true});

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