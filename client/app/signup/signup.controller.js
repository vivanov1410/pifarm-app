'use strict';

angular.module('pifarm.app')
.controller('SignupCtrl',
['$scope', 'Settings',
function ($scope, Settings) {

	$scope.account = {};

  $scope.createAccount = function (account, form) {
		console.log(form);

		if(form.fullName.$error.minlength) {
			$scope.fullNameLengthError = true;
		}

		if(form.$valid) {
			$scope.loading = true;
			$scope.createButtonText = 'Creating Account...';
	  	console.log(account);
  	}
  };

}]);
