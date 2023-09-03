var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

router.get('/', function (req, res) {
    const { user, to, subject, content } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "saline@gmail.com", 
            pass: "***********", 
        }
    });

    if(user && to && subject && content) {

      let mailOptions = {
        from: user,
        to: to.join(","),
        subject:subject ,
        html: content
      };
      transporter.sendMail(mailOptions, function (err,info) {
        if(err)
        {
          console.log(err);
        }
      });
    }

      res.send(['Votre demande a été envoyée'])
});

module.exports = router;