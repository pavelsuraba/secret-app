const nodemailer = require('nodemailer');

const sendMail =  (address, message) => {

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let mailOptions = {
        from: 'Libor notifier',
        to: process.env.MAIL_RECEIVER,
        subject: 'Libor notifier',
        text: 'User notification'
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            } else {
                return resolve('Mail send!');
            }
        });
    });
};

module.exports = sendMail;
