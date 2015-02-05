var Post = require ('../../models/post');
var router = require ('express').Router();

router.get('/' , function( req , res , next){
	Post.find()
	.sort('-date')
	.exec(function(err, posts){
		if(err){
			return next(err);	
		}
		res.json(posts);
	});
});

router.post('/',function(request, response, next){
	 var post = new Post ({
		username: request.auth.username,
	 	body: request.body.body,
	});
	 post.save(function(err){
	 		if (err){
	 		return next(err);
	 	}
	 	response.status(201).json(post);
	 });
});

module.exports = router;