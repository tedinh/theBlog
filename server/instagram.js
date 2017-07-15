let axios = require('axios');

module.exports = app => {
    app.get('/api/getterryspics', function(req, res){
      axios.get("https://www.instagram.com/terrrence_/?__a=1")
        .then(function(response) {
            var pictures = response.data.user.media.nodes;
            res.send(pictures.map((pic) => pic.display_src))

          })
    })

}
