//Required models
let cors = require('cors')
let express = require('express')
// Express instances
let app = express()

//set up body parser and cors 
app.use(cors()) //this shares all the routes or in routes
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false}))

//controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))
//Catch-all (wildcard) route
app.get('*' , (req,res) => {
  res.status(404).send('Not Found')
})

//attach to port
app.listen(process.env.PORT || 3000)
