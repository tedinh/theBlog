angular.module('theBlog').controller('mainCtrl', function($scope, mainServ) {

  $scope.add = function(){
    var x = document.getElementById('hiddenBoxes');
    if (x.style.display === 'block'){
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  $scope.IsVisible = false;

  $scope.ShowHide = function (post) {
    console.log(post)
    $scope.IsVisible = $scope.IsVisible ? false : true;
  }



  function getPosts() {
    mainServ.getPosts().then(function(res){
      console.log('posts:', res.data);
      $scope.posts = res.data.reverse();
    })
  }
  getPosts()

  $scope.updatePost = function(updatedTextbox){
    console.log("update controller")
    mainServ.updatePosts(updatedTextbox).then(function(response) {
      getPosts()
    })
  }

  $scope.deletePost = function(id){
    mainServ.deletePosts(id).then(function(response){
      getPosts()
    })
  }

  var url;
   document.getElementById('file-input')
   .addEventListener('change', function(e) {
      console.log(e.target.files)
      var file = e.target.files[0]
      mainServ.getSignedUrl(file)
      .then(function(response) {
         console.log(response)
         url = response.data.url
         return mainServ.uploadFile(file, response.data.signed_request, response.data.url)
      })
      .then(function(response) {
         console.log(response)
         $scope.imageUrl = url
         $scope.addPost = function(blogTextbox){
           console.log("hello from controller:" ,blogTextbox)
           blogTextbox.url = url;
           mainServ.addPosts(blogTextbox).then(function(response){
             getPosts()
             $scope.blog.post = ''
             $scope.blog.title = ''
           })
         }

      })
   })

})
