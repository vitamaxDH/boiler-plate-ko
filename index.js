const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = "mongodb+srv://max:1234@test-cluster1-eyswr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>console.log(`DB Connected`))
        .catch(err=>console.log(err));

app.get('/', (req, res)=>{
    res.send('hello world!');
})

app.listen(port, ()=>console.log(`Server is on port ${port}`));