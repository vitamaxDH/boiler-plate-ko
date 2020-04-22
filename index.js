const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const config = require('./config/key');

mongoose.connect(config.mongoURI,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>console.log(`DB Connected`))
        .catch(err=>console.log(err));

//application/x-www/form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('반가워유~~~~~~~~');
})

app.post('/register', (req, res)=>{

    const user = new User(req.body);
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success: true
        });
    })

})

app.listen(port, ()=>console.log(`Server is on port ${port}`));