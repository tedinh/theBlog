angular.module('theBlog')
.controller('foodCtrl', function($scope, foodSrv){

$scope.addFood = function(foodPost){
  console.log("hello from Controller")
  foodSrv.addFoods(foodPost)
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
