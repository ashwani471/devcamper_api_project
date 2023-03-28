const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config({
    path:'./config/config.env'
});

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({success:true , data : {
        id:1,
        name : "Ashwani"
    }});
});

app.get('/api/v1/bootcamps', (req,res)=>{
    res.status(200).json({success:true , message : "Show all bootcamp"});
});

app.get('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json({success:true , message : `show bootcamp with id ${req.params.id}`});
});

app.post('/api/v1/bootcamps', (req,res)=>{
    res.status(200).json({success:true , message : "create new bootcamp"});
});

app.put('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json({success:true , message : `update bootcamp with id ${req.params.id}}`});
});

app.delete('/api/v1/bootcamps/:id', (req,res)=>{
    res.status(200).json({success:true , message : `delete bootcamp with id ${req.params.id}}`});
});

const PORT = process.env.PORT || 6000;

app.listen(PORT , console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));