const express = require('express');
const app = express();
const helper = require('./helper')
const middleware = require('./middleware')


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

require('dotenv').config();
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/", (req, res) => {
  let currentTime = new Date()
  res.json(helper.matchingDates(currentTime))
})

app.get("/api/:date", middleware.validateDate, (req, res) => {
  const { dateToConvert: date } = req.params

  res.json(helper.matchingDates(date))
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
