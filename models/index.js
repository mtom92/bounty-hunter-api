//require the modules needed
let mongoose = require('mongoose')
let localMongo = 'mongodb://localhost:27017/hunters'

mongoose.connect(process.env.MONGO_URI || localMongo, {
  useNewUrlParser: true
});

module.exports.Bounty = require('./bounty')
