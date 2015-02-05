var jwt = require ('jwt-simple');
var bcrypt = require ('bcrypt');
var User = require('../../models/user');
var router = require ('express').Router();
var config = require('../../config');

router.post('/' , function( req, res , next){
	var user = new User ({
		username:req.body.username
	});
	bcrypt.hash(req.body.password, 10, function(err, hash){
		if(err){
			return next(err);
		}
		user.password=hash;
		user.save(function(err, user){
			if(err){
				return next(err);
			}
			res.sendStatus(201);
		});
	});
});

router.get('/', function( req, res, next){
	var token = req.headers['x-auth'];
	if(!token){
		
		return res.send(401);
	}
	var user = jwt.decode(token, config.secret);
	User.findOne({'username': user.username},function(err, user){
		if(err){
			return next(err);
		}
		console.log(user);
		res.send(user);
	});
});

module.exports = router;