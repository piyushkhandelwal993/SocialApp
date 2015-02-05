angular.module("app")
.service('RegistrationService', function($http){
	var rsvc=this;
	rsvc.registerNewUser = function(username, password){
		return $http.post('/api/users',{
			username: username,
			password: password
		});
	};
});