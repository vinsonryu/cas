const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
app.set('view engine', 'ejs');




app.get('/',(req,res)=>{
    res.render('index')
});

app.post("/",async (req,res)=> {

  res.redirect('/');
})

app.listen(3000,(error)=>{
    console.log(error)
})