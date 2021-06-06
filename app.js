const express=require('express');
const app=express();
const path=require('path');
const port=80;

// Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG specific stuff
app.set('views engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname,'views')); // set the view directory

//Endpoint
app.get('/',(req,res)=>{
const params={ }
res.status(200).render('home.pug', params);
});

app.get('/contact',(req,res)=>{
const params={ }
res.status(200).render('contact.pug', params);
});

app.get('/classinfo',(req,res)=>{
const params={ }
res.status(200).render('classinfo.pug', params);
});

app.get('/style',(req,res)=>{
const params={ }
res.status(200).render('style.pug', params);
});

app.get('/about',(req, res)=>{
const params={ }
res.status(200).render('about.pug', params);
});

app.listen(port, ()=>{
    console.log(`your server is runnig at http://${port}`);
})