var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 

// (Enable All CORS Requests)
// app.get('/', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

//Enable CORS for a Single Route
app.get('/products', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })


 
app.listen(8001,"127.0.0.1", function () {
  console.log('CORS-enabled web server listening on port 80')
})