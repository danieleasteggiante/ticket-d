const nodemailer = require("nodemailer");




const emailSender = async function main(destMail, subjectMessage, bodyMessage) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "marketing@dentaurum.it", // generated ethereal user
            pass: "Dentaurum125!$", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Marketing Dentaurum Italia" <marketing@dentaurum.it>', // sender address
        to: destMail, // list of receivers
        subject: subjectMessage, // Subject line
        text: "Ticket Center Dentaurum Italia", // plain text body
        html: bodyMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


exports.emailSender = emailSender;