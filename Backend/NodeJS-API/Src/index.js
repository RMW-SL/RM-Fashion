const express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
const bcrypt = require("bcrypt");
const saltRounds = 10;
// parse application/json
app.use(bodyParser.json());
const connection = require("./config/dbConfig");

// Customer Register
app.post("/api/register", (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    let result;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const role = "customer";

    bcrypt.hash(password, saltRounds, function (err, hash) {
      connection.query(
        "INSERT INTO USER (email,password,address,phoneNumber,role) VALUES(?,?,?,?,?)",
        [email, hash, address, phoneNumber, role],
        function (err, results) {
          if (err) return res.send(err);
          console.log(results);
          res.send("Registered");
        }
      );
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let hash;
  connection.query(
    "SELECT password FROM USER WHERE email=?",
    [email],
    (err, results) => {
      if (err) return res.send(err);
      hash = results[0].password;
      bcrypt.compare(password, hash, function (err, result) {
        if (err) return res.send(err);
        if (result) return res.sendStatus(200);
      });
    }
  );
});

app.get("/", (req, res) => {
  res.send("hello world");
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server Running ${PORT}`);
});
