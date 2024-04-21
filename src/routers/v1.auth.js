import express from 'express';

const v1Router = express.Router();

export default v1Router;



v1Router.post('/sign-in', (req, res)=>{
    res.end("Dang nhap");
});

v1Router.post('/sign-up', (req, res)=>{
    res.end("Dang ki");
});

v1Router.post('/google', (req, res)=> {
    res.end("google");
});