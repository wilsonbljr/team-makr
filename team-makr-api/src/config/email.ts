const user = process.env.mailtrap_user
const pass = process.env.mailtrap_pass

const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: user,
        pass: pass
    }
});

async function sendEmail (email, resetToken) {
    const message = {
        from: "teammakr@gmail.com",
        to: email,
        subject: "Pedido para redefinir a senha",
        text: `Use este token para redefinir a sua senha: ${resetToken} `
    }

    await transport.sendMail(message)
}

module.exports = sendEmail;