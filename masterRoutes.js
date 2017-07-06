
const addPost = require("./server/addPosts/addPostsSrv.js")

module.exports = app => {
  addPost(app);
}
