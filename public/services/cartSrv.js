angular.module("theBlog").service("cartSrv", function($http){

this.getCartTotal = function(){
  return $http.get('getCartTotal');
}

this.getItems = function(){
  return $http.get('/items').then(res => {
    console.log(res.data);
    this.post = res.data;
    return res;
  });
}

this.deleteItems = function(id){
  return $http.delete('/deleteItems/' + id)
}




})
