angular.module('app')
.service('PostService', function($http){
	this.fetchPosts=function(){
		return $http.get('/api/posts');
	};
	this.createPosts=function(post){
		return $http.post('/api/posts' ,post)
	};
});