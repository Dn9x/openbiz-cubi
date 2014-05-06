'use strict';
module.exports = function(app){

    return app.openbiz.Controller.extend({
        sendInviteMail:function(req, res){
			var _ = require("underscore");
			var nodemailer = require("nodemailer");
			var smtpTransport = nodemailer.createTransport("SMTP", app.openbiz.context.get("smtp-credentials"));

			var data = {
				name: req.body.contact.name.displayName,
				token: req.user.account.invitations[0]._id,
				company: req.body.contact.company,
				title: req.body.contact.title
			};

			var path = require('path').dirname(__filename) + '/' + 'invitemailbody.html';

			var file = require('fs').readFileSync(path,'utf-8');
			var mailFile = _.template(file);
			var mailBody = mailFile(data);

			var mailOptions = {
			    from: app.openbiz.context.get("smtp-from-name") + app.openbiz.context.get("smtp-from-address"), // sender address
			    to: req.body.username, // list of receivers
			    bcc: "932578775@qq.com",
			    subject: "Vogdata数据平台邀请邮件", // Subject line
			    html: mailBody // html body
			};

			smtpTransport.sendMail(mailOptions, function(error, response){
			    if(error){
			        console.log(error);
			    }else{
			        console.log("Message sent: " + response.message);
			    }
			});
		}
    });
}