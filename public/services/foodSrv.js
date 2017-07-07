angular.module("theBlog").service("foodSrv", function($http){

this.addFoods = function(foodPost){
  console.log("hello from foodsrv")
  return $http.post('/foodBlog', foodPost)
}

this.getFoods = function(){
  return $http.get('/foodBlog').then(res => {
    console.log(res.data);
    this.post = res.data;
    return res;
  });
}

this.updateFoods = function(data) {
  return $http.put('/foodBlog', data)
}

this.deleteFoods = function(id){
  return $http.delete('/deleteFoodBlog/' + id)
}

})
