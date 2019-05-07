//Required models
let express = require('express')

//router instances
let router = express.Router()

//include models
let db = require('../../models')

//get bounties
router.get('/', (req,res) => {
  db.Bounty.find()
  .then(foundBounties => {
    res.send(foundBounties)
  })
  .catch( err => {
    console.log('error in get /v1/bounties', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//post bounties
router.post('/', (req,res) => {
  db.Bounty.create(req.body)
  .then(createdBounty => {
    res.send(createdBounty)
  })
  .catch( err => {
    console.log('error in post /v1/bounties', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })

})

//get bounties/:id
router.get('/:id', (req,res) => {
  db.Bounty.findById(req.params.id)
  .then(foundBounty => {
    res.send(foundBounty)
  })
  .catch( err => {
    console.log('error in get /v1/bounty/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put bounties
router.put('/:id', (req,res) => {
  //args : {where}, data , {options}
  db.Bounty.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedBounty => {
     res.send(editedBounty)
  })
  .catch( err => {
    console.log('error in put /v1/bounty/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete bounties
router.delete('/:id', (req,res) => {
  db.Bounty.findOneAndDelete({
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /v1/bounties/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
