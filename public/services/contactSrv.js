angular.module('theBlog').service('contactSrv', function($http){

  this.instagramPics = function(){
      return $http.get("https://www.instagram.com/terrrence_/?__a=1")
      .then(function (response){
          var pictures = response.data.user.media.nodes;
          return pictures.map((pic) => pic.display_src)

     })
  }


})
