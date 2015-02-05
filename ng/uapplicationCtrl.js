angular.module('app')
.controller('ApplicationCtrl',function($scope,$location){
	$scope.$on('login',function( _ , user ){
		$location.path("/");
		$scope.currentUser = user; 
		console.log($scope.currentUser);
	});

});