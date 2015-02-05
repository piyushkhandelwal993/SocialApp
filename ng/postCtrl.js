angular.module('app')
.controller('PostsCtrl',function($scope, PostService ){
	PostService.fetchPosts()
	.success(function( posts ){
		$scope.posts=posts;
	});
	$scope.addPosts = function(){
		console.log(new Date());
		if($scope.postBody){
		PostService.createPosts({
			username:'piyush',
			body : $scope.postBody,
			date: new Date()
		}).success(function( post ){
			$scope.posts.unshift(post);
			$scope.postBody="";
			});
		}
	}
});