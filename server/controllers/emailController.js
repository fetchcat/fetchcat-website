// const nodemailer = require("nodemailer");
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const output = `
  <h3>FetchCat.ca Contact Form Message</h3>
  <ul>
    <li>From: ${name}</li>
    <li>Email: ${email}</li> 
    <li>Phone: ${phone}</li> 
  </ul>
  <p>${message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"FetchCat.ca Mailer" <foo@example.com>', // sender address
    to: "michelleevarogers@gmail.com", // list of receivers
    subject: "FetchCat.ca Contact Form", // Subject line
    text: "", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

const sendGrid = async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body);

  const output = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Phone: ${phone}\r\n
    Message: ${message}
  `;

  const data = {
    to: "michelleevarogers@gmail.com",
    from: "mailer@fetchcat.ca",
    subject: "FetchCat.ca Contact Form Message",
    text: output,
    html: output.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};

module.exports = { sendGrid };
