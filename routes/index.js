import { Router } from "express";

const indexPages = Router();

indexPages.get("/home",(req, res) => {
    res.send("main.ejs");
});

indexPages.get('/register', (req, res) => {
    res.send('register.ejs');
});

indexPages.get('/login', (req, res) => {
    res.send('login.ejs');
});


export default indexPages;

