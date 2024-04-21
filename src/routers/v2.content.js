import express from 'express';

const v2Router = express.Router();

export default v2Router;

v2Router.get('/list', (req, res)=>{
    res.end("Danh sach bi viet");
});

v2Router.post('/new', (req, res)=>{
    res.end("Tao bai viet moi");
});

v2Router.get('/:id/detail', (req, res)=> {
    res.end('bai viet thu id');
    // res.end(`Bai viet thu ${id}`);
});

v2Router.put('/:id/edit', (req, res)=>{
    res.end('sua bai viet thu id');
    // res.end(`Sua bai viet thu ${id}`);
});

v2Router.delete('/:id/remove', (req, res)=>{
    res.end('xoa bai viet thu id');
    // res.end(`Xoa bai viet thu ${id}`);
});