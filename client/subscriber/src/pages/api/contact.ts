import { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();
import nodemailer from 'nodemailer';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${text}
    `,
  };

  // transporter.sendMail(mailOption, (err: any, data: any) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('mail send');
  //   }
  // });

  // console.log(name, email, text);
  // res.send('success');
  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log('mail send');
      console.log(name, email, text);
      res.send('success');
    }
  });
};

// export default function (req, res) {
//   require('dotenv').config();

//   let nodemailer = require('nodemailer');
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'demo email',
//       pass: process.env.PASSWORD,
//     },
//     secure: true,
//   });
//   const mailData = {
//     from: 'demo email',
//     to: 'your email',
//     subject: `Message From ${req.body.name}`,
//     text: req.body.message + ' | Sent from: ' + req.body.email,
//     html: `<div>${req.body.message}</div><p>Sent from:
//     ${req.body.email}</p>`,
//   };
//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   res.status(200);
// }
