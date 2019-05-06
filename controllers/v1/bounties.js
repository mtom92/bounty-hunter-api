//Required models
let express = require('express')

//router instances
let router = express.Router()

//get bounties
router.get('/', (req,res) => {
  res.send('stub')
})

//post bounties
router.post('/', (req,res) => {
  res.send('stub')
})

//get bounties/:id
router.get('/:id', (req,res) => {
  res.send('stub')
})

//put bounties
router.put('/:id', (req,res) => {
  res.send('stub')
})

//delete bounties
router.delete('/:id', (req,res) => {
  res.send('stub')
})
module.exports = router
