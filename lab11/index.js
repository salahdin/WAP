const express = require('express');
const app = express(); 
const path = require('path');
const fs = require('fs');


app.use('/static', express.static(path.join(__dirname,'static')));

app.get('/student', (req, res)=>{
    const html = path.join(__dirname, 'student.html')
    res.sendFile(html)
})

app.get('/product', (req, res)=>{
    const html = path.join(__dirname, 'product.html')
    res.sendFile(html)
})

app.use('/',(req,res)=>{
    const html = path.join(__dirname,'index.html');
    res.sendFile(html);
})

app.listen(3000);