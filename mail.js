import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';


const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port:587,
    auth:{
        user:"vinson2346@gmail.com",
        pass:"nKavXZJ4srbp0jON"
    },
});

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'vinson2346@gmail.com',
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

export default sendMail;