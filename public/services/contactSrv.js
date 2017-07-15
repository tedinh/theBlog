angular.module('theBlog').service('contactSrv', function($http){

  this.instagramPics = function(){
      return $http.get("/api/getterryspics")
      .then(function (response){
        console.log(response);
          var pictures = response.data;
          return pictures;

     })
  }


})
