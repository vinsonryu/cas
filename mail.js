import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';


const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port:587,
    auth:{
        user:"learncas@gmail.com",
        pass:"dD8SVxT1z0FJK2Q6"
    },
});

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'learncas@gmail.com',
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