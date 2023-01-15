const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'justinjalleman@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'justinjalleman@gmail.com',
        subject: 'dont leave me',
        text: `hi ${name}, what have you forsaken me?`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}