import express from 'express';
import {articles} from "../../public/articles/articles.js"
const v1Router = express.Router();

export default v1Router;

v1Router.use(express.static("public"));

v1Router.route('/articles').get((req, res)=>{
    res.json(articles);
    // res.end(JSON.stringify(articles));
    // res.end("danh sach bai bao");
}).post((req, res)=>{
    var data = req.body;
    console.log(data);
    articles.push(data);
    res.json(data);
    // res.end('them vao danh sach bai bao');
});

v1Router.route('/articles/:id').get((req, res)=>{
    let data = articles.find((article) => article.id === req.params.id);
    res.json({data,});
}).post((req, res)=>{
    let data = {"id":"4","name":"article 4","author":"Denku","catagory":"c5","enotify":false,"smsnotify":false,"detail":"data 4"};
    res.json(data);
    res.end('post bai bao');
}).delete((req, res)=>{
    // res.end('xoa bai bao');
    let data = articles.find((article) => article.id === req.params.id);
    articles.splice(data-1,1);
    res.send(JSON.stringify(data));
    // res.json({articles});
});

v1Router.route('/categories').get((req, res)=>{
    res.end('danh muc bai bao');
}).post((req, res)=>{
    res.end('them vao danh muc bai bao');
});

v1Router.route('/categories/:id').get((req, res)=>{
    res.end('danh muc');
}).post((req, res)=>{
    res.end('them danh muc');
}).delete((req, res)=>{
    res.end('xoa danh muc');
});