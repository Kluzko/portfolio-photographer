const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,

    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // send mail with defined transport object
  const message = {
    from:
      options.from || `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email || `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
