angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("hello world !!");
  };

  $scope.learningNgChange = function() {
    console.log("an input has change !!");
  };

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
  ]
});
