const sgMail = require('@sendgrid/mail');

const sendMail = async (email , verificationToken) => {

    const {SENDGRID_API_KEY, EMAIL_USER} = process.env
    sgMail.setApiKey(SENDGRID_API_KEY);
   
  
  const msg = {
    to: email,
    from: EMAIL_USER,
    subject: "Please confirm your email",
    html: `<p>Your email address has been verified. Go with the link to use.</p><a href="http://185.183.111.62:3002/api/user/${verificationToken}">Go to Profile</a>`,
  };
  
  sgMail
    .send(msg)
    .then((response) => {
      console.log('Email sent');
    })
    .catch(error => {
      console.error(error);
    });
  }    

  module.exports = {sendMail}