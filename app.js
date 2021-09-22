const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const router = require('./routers/index');
const app = express();

//body-parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set views files
app.set('views' , 'views')
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));


// run index
app.use(router);

app.listen(port, (err,data)=>{
    console.log(`server has been started on http://localhost:${port}`); 
})