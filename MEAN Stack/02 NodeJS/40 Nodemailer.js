const nodemailer = require("nodemailer");

// Async main:
// Await is not allowed in global scope, must use a wrapper.
async function main() {

  // Generate test SMTP service account from ethereal.email
  let testAccount = await nodemailer.createTestAccount();

  // Create reusable transporter object using the default SMTP transport:
  let transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
    secure: false, // true for 465, false for other ports.
    auth: {
      user: 'camilo@siriusris.com',
      pass: 'hashed_password',
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  // Send mail with defined transport object:
  let info = await transporter.sendMail({
    from: '"Camilo Pifano" <camilo@siriusris.com>', // Sender address
    to: "camilopifano@gmail.com",                   // List of receivers
    subject: "Sirius RIS - Notificación",           // Subject line
    text: "Hola mundo",                             // Plain text body
    html: "<b>Hola mundo</b>",                      // HTML body
  });

  // Send console information:
  console.log("Mensaje enviado: %s", info.messageId);
  console.log("Vista previa de URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
