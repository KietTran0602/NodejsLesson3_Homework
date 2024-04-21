import express from "express";
import bodyParser from "body-parser";

import v1auth from "./routers/v1.auth.js";
import v1content from "./routers/v1.content.js";
import v1notify from "./routers/v1.notify.js";
import v2auth from "./routers/v2.auth.js";
import v2content from "./routers/v2.content.js";
const app = express();

app.use(express.static("public"));

app.use((req,res,next)=>{
    var currentMethod = req.method;
    var currentUrl = req.url;

    console.log(`Url: [${currentUrl}], method: [${currentMethod}] `);
    console.log(res.statusCode);
    next(); 
});

app.get("/", (req, res)=>{
    res.send("Welcome to Kiet homework");
});

app.post('v1/auth/sign-in', (req, res)=>{
    console.log("Dang nhap");
    res.end("Dang nhap");
});

app.use("/v1/auth", v1auth);
app.use("/v1/content", v1content);
app.use("/v1/notify", v1notify);

app.use("/v2/auth", v2auth);
app.use("/v2/content/articles", v2content);



app.listen(3000, ()=> {
    console.log("app is running on port 3000");
});