'use strict';
module.exports = function(app){
    //routes for my account
    return {
    "get /me"					: [ app.openbiz.ensurePermission("cubi-myaccount-manage"),
    								app.getController("MeController").getMe ],
    "delete /me" 				: [ app.getController("AuthController").logout ]
//
//    // start default route rules for subDoc  - contacts
//    "post /me/contacts"			: [ openbiz.ensurePermission("cubi-myaccount-manage"),
//    openbiz.getController("cubi.me.MeController").createContact ],
//
//    "get /me/contacts"			: [ openbiz.ensurePermission("cubi-myaccount-manage"),
//    openbiz.getController("cubi.me.MeController").getContactCollection ],
//
//    "get /me/contacts/:id"		: [ openbiz.ensurePermission("cubi-myaccount-manage"),
//    openbiz.getController("cubi.me.MeController").getContact ],
//
//    "put /me/contacts/:id"		: [ openbiz.ensurePermission("cubi-myaccount-manage"),
//    openbiz.getController("cubi.me.MeController").updateContact ],
//
//    "delete /me/contacts/:id"	: [ openbiz.ensurePermission("cubi-myaccount-manage"),
//    openbiz.getController("cubi.me.MeController").deleteContact ],
//    // end routes  - contacts
//
//    "post /me/reset-password"	: [ openbiz.getController("cubi.me.MeController").resetPassword ],
//
//    "post /me/forget-password"	: [ openbiz.getController("cubi.me.MeController").requestResetPassword ]
    }
}