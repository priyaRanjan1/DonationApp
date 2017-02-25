var app = angular.module('plnkr', []);

app.controller('MainCtrl', function($scope) {
  // $scope.name = 1500;
  $scope.current_amount = 0;
  $scope.total_amount = 1500;
  $scope.donation_amount = 0;

  $scope.new_donation = function(donation_amount) {
  	$scope.current_amount += donation_amount;
  	var width = ($scope.current_amount / $scope.total_amount) * 100;
  	$('#donation-progress').css('width', width+"%");
  }

});

// 1. Import angular library
// 1. Create file called app.js
