module.exports = app => {

  app.put('/foodBlog', function(req, res, next){
    req.app.get('db').updateFood([req.body.id, req.body.update])
    .then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(err))
  })

}
