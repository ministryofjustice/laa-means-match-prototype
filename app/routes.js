
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Home page route
router.get('/', function (req, res) {
  res.render('index')
})


// Load versioned routes here
require('./routes/v8/routing.js')(router)
require('./routes/v9/routing.js')(router)
require('./routes/v10/routing.js')(router)

module.exports = router
