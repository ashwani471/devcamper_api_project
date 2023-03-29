const express = require('express');
const dotEnv = require('dotenv');

// const logger = require('./middleware/logger');
const morgan = require('morgan');

const bootcamps = require("./routes/bootcamps");

dotEnv.config({
    path:'./config/config.env'
});

const app = express();

// app.use(logger);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps' , bootcamps);

app.get('/',(req,res)=>{
    res.status(200).json({success:true , data : {
        id:1,
        name : "Ashwani"
    }});
});

const PORT = process.env.PORT || 6000;

app.listen(PORT , console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));