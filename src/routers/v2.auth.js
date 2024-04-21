import express from 'express';

const v2Router = express.Router();

export default v2Router;

v2Router.post('/login', (req, res)=>{
    res.end("V2 Dang nhap");
});

v2Router.post('/register', (req, res)=>{
    res.end("V2 Dang ki");
});