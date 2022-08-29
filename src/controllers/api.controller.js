const express = require('express');
const router = express.Router();
const Api = require('../model/api.model');

router.post('/api', async(req, res)=>{
    try{
        const api = await Api.create(req.body);
        return res.send(api);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get('/api', async(req, res)=>{
    try{
        const api = await Api.find().lean().exec();
        return res.send(api);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;