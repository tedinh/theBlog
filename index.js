const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, port = 3000
 				, app = express()
				, config = require("./config")
        , massive = require("massive")
        , masterRoutes = require("./masterRoutes.js")
				// , session = require("express-session")

// app.use(session(config.session) );


app.use(cors())
app.use(bodyParser.json())

masterRoutes(app);
app.use("/", express.static(__dirname + '/public'));

massive('postgres://tedinh@localhost:5432/blog').then(massiveInstance => {
  app.set('db', massiveInstance);
});




app.listen(port, function() {
  console.log('Server listening on port', port)
})
