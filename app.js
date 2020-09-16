const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postroute = require('./routes/posts');
app.use('/', postroute);
app.use(bodyParser.json());

app.listen(8000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("sever is listerning");
    }
});