angular.module('theBlog')
.controller('foodCtrl', function($scope, foodSrv){

  $scope.appear = function(){
    var x = document.getElementById('hiddenBoxes2');
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


$scope.addFood = function(foodPost){
  console.log("hello from Controller")
  foodSrv.addFoods(foodPost).then(function(response){
    getFoods()
    $scope.food.name = ''
    $scope.food.type = ''
    $scope.food.price = ''
    $scope.food.description = ''
  })
}

function getFoods() {
  foodSrv.getFoods().then(function(res){
    console.log(res.data);
    $scope.foods = res.data.reverse();
  })
}
getFoods()

$scope.updateFood = function(updatedFoodbox){
  console.log("update controller")
  foodSrv.updateFoods(updatedFoodbox).then(function(response) {
    getFoods()
  })
}

$scope.deleteFood = function(id){
  console.log("delete food controllers")
  foodSrv.deleteFoods(id).then(function(response){
    getFoods()
  })
}


})
