
const addPost = require("./addPosts/addPostsSrv.js")
const updatePost = require("./updatePosts/updatePostSrv.js")
const deletePost = require("./deletePost/deletePostsSrv.js")

module.exports = app => {
  addPost(app);
  updatePost(app);
  deletePost(app);
}
