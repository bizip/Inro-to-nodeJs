const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    postroute = require('./routes/posts'),
    Post = require('./models/posts');


require('dotenv').config();
let port = process.env.PORT;
let host = process.env.HOST;
let db_ur = process.env.DB_URL;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', postroute);

//mongoose connection
mongoose.connect(db_ur, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(result => {
    //listerning the server
    app.listen(port, host, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server is listerning on ${port} ${host}`);
        }
    });
}).catch(err => {
    console.log(err);
});