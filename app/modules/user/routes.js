'use strict';
module.exports = function(app){	
    return {
    	"post /users/login" 		: [ app.getController("AuthController").authenticate ],
    	"post /users/logout" 		: [ app.getController("AuthController").logout ],
        "post /users" 		    	: [ app.getController("UserController").create ],
        "post /users/check-unique" 	: [ app.getController("UserController").checkUsernameUnique ]
    }
}