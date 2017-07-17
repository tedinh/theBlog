angular.module('theBlog').controller('contactCtrl', function($scope, contactSrv){

  contactSrv.instagramPics().then(function(response){
      $scope.images = response;
      
  })

$scope.test = "hello";




})
