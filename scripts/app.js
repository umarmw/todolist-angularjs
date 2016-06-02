angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

  $scope.helloConsole = dataService.helloConsole;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos =  response.data;
  });

  $scope.helloWorld = function() {
    console.log("hello world !!");
  };

  $scope.learningNgChange = function() {
    console.log("an input has change !!");
  };


})
.service('dataService', function($http){
  this.helloConsole = function(){
    console.log("This is the hello console service!");
  }
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback);
  }
});
