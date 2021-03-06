module.exports = app => {

  app.post('/postBlog', function(req, res, next){
    console.log("this is a test from addPostsSrv")
    console.log(req.body.post,req.body.title, req.body.url)

    req.app.get('db').addPost([req.body.post, req.body.title, req.body.url])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).json(err))
  })

  app.get('/postBlog', function (req, res){
    req.app.get('db')
    .run('select blog_post, title, imageurl, id from posts order by id')
    .then(blog_post => res.status(200).json(blog_post));
  })



}
