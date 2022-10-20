const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/carousel',(req,res)=>{
    res.render('carousel')
})

app.listen(3000,(error)=>{
    console.log(error)
})