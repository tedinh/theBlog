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

this.updatePosts = function(data) {
  return $http.put('/postBlog', data)
}

this.deletePosts = function(id){
  return $http.delete('/deleteBlog/' + id)
}

this.getSignedUrl = function(file) {
      return $http.get(`/api/s3?file_name=${file.name}&file_type=${file.type}`)
   }

this.uploadFile = function(file, signed_request) {
      return $http.put(signed_request, file, {headers: {'x-amz-acl': 'public-read'}})
   }

})
