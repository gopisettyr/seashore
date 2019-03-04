const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const path = require('path');
app.use(bodyPaser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'public')))
app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(5000);