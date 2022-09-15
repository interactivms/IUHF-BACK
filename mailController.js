const nodemailer = require('nodemailer');

exports.makeMail = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            secure: true,
            port: 465,
            auth: {
              user: process.env.ZOHOMAIL,
              pass: process.env.ZOHOPASS,
            },
        });

        console.log()
        const output = `
            <html>
            <body>
            <p>Nombre: ${req.body.email} </p>
            <p>Nombre: ${req.body.email} </p>
            </br >
            <p>Mensaje: </p>
            <p>${req.body.message}</p>
            </body>
            </html>
            `;

        const mailOptions = {
            from: "contacto@iuhf.education", // TODO: email sender
            to: "contacto@iuhf.education", // TODO: email receiver
            subject: "Nuevo Contacto Página",
            html: output
        }
        transporter.sendMail(mailOptions, (err) => {
            if(err) console.log(err)
            res.send("Success")
        });
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
}