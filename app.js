const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(bodyPaser.urlencoded({extended : false}));

app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname + './index.html'));
})

app.listen(3000);