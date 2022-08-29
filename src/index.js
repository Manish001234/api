const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./config/db");

const PORT = process.env.PORT;

const apiController = require('./controllers/api.controller');

app.use('/', testController);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("listening on port..!");
    }catch(err){
        console.log(err);
    }
})
