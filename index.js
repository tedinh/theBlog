const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, port = 3000
 				, app = express()
				, config = require("./config")
        , massive = require("massive")
        , masterRoutes = require("./server/masterRoutes.js")
				// , session = require("express-session")
        , aws = require("aws-sdk")

// app.use(session(config.session) );
aws.config.update({
   accessKeyId: config.accessKeyId,
   secretAccessKey: config.secretAccessKey,
   region: config.region,
   signatureVersion: config.signatureVersion
})

app.use(cors())
app.use(bodyParser.json())

masterRoutes(app);
app.use("/", express.static(__dirname + '/public'));

massive('postgres://tedinh@localhost:5432/blog').then(massiveInstance => {
  app.set('db', massiveInstance);
});


app.get('/api/s3', function(req, res, next) {
   const s3 = new aws.S3()
   const s3Config = {
      Bucket: config.bucketName,
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
   }
   s3.getSignedUrl('putObject', s3Config, function(err, response) {
      if (err) {
         return next(err)
      }
      const data = {
         signed_request: response,
         url: `https://${config.bucketName}.s3.amazonaws.com/${req.query.file_name}`
      }
      return res.status(200).json(data)
   })

})


app.listen(port, function() {
  console.log('Server listening on port', port)
})
