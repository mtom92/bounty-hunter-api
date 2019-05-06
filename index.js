//Required models
let express = require('express')
// Express instances
let app = express()

//controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))
//Catch-all (wildcard) route
app.get('*' , (req,res) => {
  res.status(404).send('Not Found')
})

//attach to port
app.listen(process.env.PORT || 3000)
