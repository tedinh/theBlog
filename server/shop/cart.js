module.exports = app => {

  app.get('/getCartTotal', function (req, res){
    console.log('hello from cart endpoint');
    var db = req.app.get('db');

    db.getCartTotal()

    .then(total => res.send(total))
    .catch(error => res.status(404).json(err));
  })

  app.get('/items', function (req, res){
    req.app.get('db')
    .run('select title, price, image, quantity, id from cart order by id')
    .then(blog_post => res.status(200).json(blog_post));
})

app.delete('/deleteItems/:id', function(req, res, next){
  console.log("ello")
  req.app.get('db').deleteItem([req.params.id])
  .then(response => res.status(200).json(response))
  .catch(error => res.status(404).json(err))
})



}
