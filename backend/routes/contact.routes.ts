var nodemailer = require('nodemailer');
var nodeoutlook = require('nodejs - nodemailer - outlook');
const app = express();

app.get('/contact', function (req, res) {
    const { user, to, subject, content } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "saline@gmail.com", 
            pass: "***********", 
        }
    });

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

});

module.exports = router;