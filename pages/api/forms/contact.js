import nodemailer from 'nodemailer';

export default async function plannerForm(req, res) {
  const { body } = req;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    let message = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Contact Form Sumbission',
      text: `
      Name: ${body.name}
      Phone: ${body.phone}
      Email: ${body.email}
      Message: ${body.message}
      `,
      html: `
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    res.redirect('/contact/success');
  } catch (e) {
    console.log(e);
    res.redirect('/contact/error');
  }
}
