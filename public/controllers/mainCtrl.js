angular.module('theBlog').controller('mainCtrl', function($scope, mainServ) {

  $scope.test = "hello world!";

  $scope.addPost = function(blogTextbox){
    console.log("hello from controller:" ,blogTextbox)
    mainServ.addPosts(blogTextbox)
  }


  mainServ.getPosts().then(function(res){
    console.log(res.data);
    $scope.posts = res.data;
  })




})
