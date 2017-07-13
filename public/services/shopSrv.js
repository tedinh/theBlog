angular.module("theBlog").service("shopSrv", function($http){

  this.getProds = function(){
    return $http.get('/shop').then(res => {
      console.log(res.data);
      this.post = res.data;
      return res;
    });
  }

  this.addToCart = function (product){
    return $http.post('/addToCart', product);
  }






})
