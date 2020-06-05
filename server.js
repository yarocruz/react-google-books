const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const routes = require('./routes/api/book');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'jaycruz:p0Rtf0lio@dbh85.mlab.com:27857/heroku_3v3m1kjh', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
