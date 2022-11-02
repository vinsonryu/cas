import express from 'express';
import { addCustomer } from './firebase.utils.js';
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
app.set('view engine', 'ejs');




app.get('/',(req,res)=>{
    res.render('index')
});

app.post("/",async (req,res)=> {
    const {name,email} = req.body;
    addCustomer(email,name)
    res.redirect('/');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,(error)=>{
    console.log(error)
})