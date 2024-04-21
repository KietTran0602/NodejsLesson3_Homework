import express from 'express';

const v1Router = express.Router();

export default v1Router;

v1Router.post('/email', (req, res)=>{
    res.end("Thong bao qua email");
});

v1Router.post('/sms', (req, res)=>{
    res.end("Thong bao qua tin nhan");
});