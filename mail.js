import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        // 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
        api_key: '185d4d02684e89c1ebf6697f0dc1414c-31eedc68-a1553441',
        domain: 'sandboxfde5b9826e4f48cd9894cac212a2ad5d.mailgun.org'
    }
};

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