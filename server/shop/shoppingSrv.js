module.exports = app => {



  app.get('/shop', function (req, res){
    req.app.get('db')
    .getProd()
    .then(blog_post => res.status(200).json(blog_post));
  })

  app.post('/addToCart', (req,res) => {
    console.log('req.body is:', req.body)
    var db = req.app.get('db');
    db.addToCart([req.body.title, req.body.price, req.body.image, req.body.quantity])
    .then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(err))
  })





}
