import express from 'express';
import { addCustomer } from './firebase.utils.js';
import sendMail from './mail.js';
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
app.set('view engine', 'ejs');




app.get('/',(req,res)=>{
    res.render('index')
});

app.post("/mail",async (req,res)=> {
    const {name,email} = req.body;
    const subject = "testing email sending function";
    const text = "this is sample text for testing purposes";
    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.redirect("/");
        }
    });
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,(error)=>{
    console.log(error)
})