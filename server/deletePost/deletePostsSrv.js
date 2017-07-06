module.exports = app => {

  app.delete('/deleteBlog/:id', function(req, res, next){
    req.app.get('db').deletePost([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(err))
  })

}
