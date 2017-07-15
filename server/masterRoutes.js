
const addPost = require("./addPosts/addPostsSrv.js")
const updatePost = require("./updatePosts/updatePostSrv.js")
const deletePost = require("./deletePost/deletePostsSrv.js")

const addFood = require("./addFoods/addFoodSrv.js")
const updateFood = require("./updatefoods/updateFoodSrv.js")
const deleteFood = require("./deleteFoods/deleteFoodSrv.js")

const shopping = require("./shop/shoppingSrv.js")
const cart = require("./shop/cart.js")

const passport = require("./passport.js")

const insta = require('./instagram.js')

module.exports = app => {
  addPost(app);
  updatePost(app);
  deletePost(app);

  addFood(app);
  updateFood(app);
  deleteFood(app);

  shopping(app);
  cart(app);

  insta(app);


}
