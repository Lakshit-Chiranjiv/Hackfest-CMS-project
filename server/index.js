const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.json({msg: 'cms server'});
})

app.listen(5000,()=> console.log("CMS server listening on port 5000"));