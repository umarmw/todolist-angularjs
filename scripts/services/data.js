'use strict';

angular.module("todoListApp")
.service('dataService', function($http){
  this.helloConsole = function(){
    console.log("This is the hello console service!");
  }
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback);
  }
  this.deleteTodo = function(todo){
    console.log("The "+todo.name+" todo has been deleted!");
    //other db logic
  }
  this.saveTodos = function(todo){
    console.log(todo.length+" todos have been saved!");
    //other db logic
  }
});
