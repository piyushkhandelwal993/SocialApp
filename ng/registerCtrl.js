angular.module("app")
.controller('RegisterCtrl', function($scope, RegistrationService, UserService){
	$scope.registerNewUser= function(username, password){
		RegistrationService.registerNewUser(username,password)
		.then(function(response){
			console.log(response.status);
			if(response.status==201){
				UserService.login( username, password)
							.then(function(response){
								$scope.$emit('login',response.data);
							});
			}
		});
	};
});