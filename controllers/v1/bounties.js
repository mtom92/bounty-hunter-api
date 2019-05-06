//Required models
let express = require('express')

//router instances
let router = express.Router()

//routes
router.get('/', (req,res) => {
  res.send('stub')
})
