const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport({
    sendgridTransport({
        auth : {
            api_key : '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'
        }
    })
});

app.use(bodyPaser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'public')))
app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/', (req,res,next) => {

})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))