const sendMail = require('../utils/mail');

exports.send = async (req, res) => {
    try {
        const msg = await sendMail();

        return res.json({
            data: msg
        });
    }
    catch(err) {
        return res.json({
            error: 'API error'
        });
    }
};