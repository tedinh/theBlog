module.exports = app => {

  app.put('/postBlog', function(req, res, next){
    console.log("test from updatePostSrv")
    console.log("req.body is", req.body)
    req.app.get('db').updatePost([req.body.id, req.body.update])
    .then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(err))
  })



}
