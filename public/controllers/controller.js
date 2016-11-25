var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/resume').success(function(response) {
    console.log("I got the data I requested");
    $scope.resume = response;
    $scope.resumeCell = "";
  });
};

refresh();

$scope.addResumeCell = function() {
  console.log($scope.resumeCell);
  $http.post('/resume', $scope.resumeCell).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/resume/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/resume/' + id).success(function(response) {
    $scope.resumeCell = response;
  });
};

$scope.update = function() {
  console.log($scope.resumeCell._id);
  $http.put('/resume/' + $scope.resumeCell._id, $scope.resumeCell).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.resumeCell = "";
}

}]);﻿
