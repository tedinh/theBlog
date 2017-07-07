module.exports = app => {

  app.delete('/deleteFoodBlog/:id', function(req, res, next){
    console.log("hello")
    req.app.get('db').deleteFood([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(err))
  })

}
