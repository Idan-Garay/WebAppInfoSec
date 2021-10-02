var cookieParser = require("cookie-parser");
var csrf = require("csurf");
// var bodyParser = require("body-parser");
var express = require("express");

// setup route middlewares
var csrfProtection = csrf({ cookie: true });
// var parseForm = bodyParser.urlencoded({ extended: false });

// create express app
var app = express();

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());

app.get("/", csrfProtection, function (req, res) {
  const options = {
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 3600).toUTCString(),
  };
  res.cookie(options).send({ CSRFToken: req.csrfToken() });
});

app.listen(8000, () => {
  console.log("Server on https://localhost:8000");
});
