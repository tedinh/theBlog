module.exports = app => {

  app.post('/foodBlog', function(req, res, next){
    console.log("this is a test from addPostsSrv")
    console.log(req.body.post,req.body.title)

    req.app.get('db').addFood([req.body.name, req.body.type, req.body.price, req.body.description])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err))
  })

  app.get('/foodBlog', function (req, res){
    req.app.get('db')
    .run('select restaurant, type, price_range, description, id from restaurants order by id')
    .then(blog_post => res.status(200).json(blog_post));
  })

}
