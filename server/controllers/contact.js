const sendEmail = require("../utils/sendEmail");

// @desc Nodemailer send mail
// @route POST /sendMail
// @access Public

exports.getMail = async (req, res, next) => {
  const from = req.body.email;
  const subject = req.body.title;
  const text = req.body.message;

  try {
    await sendEmail({
      from,
      subject,
      text,
    });
    res.statusCode = 200;
  } catch (err) {
    console.log(err);

    return next(new ErrorResponse("Email could not be sent", 500));
  }

  res.status(200).json({
    success: true,
  });
};
