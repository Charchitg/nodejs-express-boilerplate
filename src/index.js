require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

mongoose.connect('' , {
    useNewUrlParser : true , useUnifiedTopology : true
} , () => {
    console.log('db connected');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`app started at port ${PORT}`);
});
