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
    const text = "username:"+name;
    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(data)
            res.status({ message: 'Email sent!!!' });
            res.redirect("/")
        }
    });
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,(error)=>{
    console.log(error)
})