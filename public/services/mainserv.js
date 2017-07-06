angular.module("theBlog").service("mainServ", function($http){

this.addPosts = function(blogText){
  console.log("Hello from MainServ:", blogText)
  return $http.post('/postBlog', blogText)
}

this.getPosts = function(){
  return $http.get('/postBlog').then(res => {
    console.log(res.data);
    this.post = res.data;
    return res;
  });
}


})
