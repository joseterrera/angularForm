//  angular app
var app = angular.module('myApp', ['ngMessages']);
// angular controller
app.controller('myCtrl', ['$scope', function($scope) {
	$scope.user = {
	firstName: '',
	lastName: '',
	email: '',
	newsletter: false
}
$scope.reset = function() {
	$scope.user = angular.copy($scope.master);
};
// submit function
$scope.submitForm = function() {
//check that all fields are valid
	if ($scope.userForm.$valid) {
		alert('Thanks! Your form has been submitted.');
	}
};
}]);