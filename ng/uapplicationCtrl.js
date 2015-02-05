angular.module('app')
.controller('ApplicationCtrl',function($scope,$location , $localStorage, UserService , $http){
	$scope.$on('login',function( _ , user ){
		$location.path("/");
		$scope.currentUser = user;
	});

	if($localStorage.token){
		$http.defaults.headers.common['x-auth']=$localStorage.token;
		UserService.loadLoggedInUser()
		.success(function( user){
			$scope.currentUser = user;
		});
	}
});