const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: 'kundanpurbia786@gmail.com',
        to: email,
        subject: "Thanks for Joining",
        text: `Welcome to the app, ${name}. Let me know how yours experience.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        from: 'kundanpurbia786@gmail.com',
        to: email,
        subject: 'Account Deleted',
        text: `GoodByee, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
