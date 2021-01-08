let nodemailer = require("nodemailer");

// @desc Nodemailer send mail
// @route POST /sendMail
// @access Public

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// verifying the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

exports.sendMail = (req, res, next) => {
  const email = req.body.email;
  const subject = req.body.title;
  const text = req.body.message;

  const mail = {
    from: email,
    to: process.env.MAIL_USER,
    subject,
    text,
    replyTo: email,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
};
