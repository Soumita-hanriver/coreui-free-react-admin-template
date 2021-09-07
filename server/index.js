const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactTest",
})

app.post("/create", (req, res) => {
  const name = req.body.name
  const position = req.body.position
  const office = req.body.office
  const age = req.body.age
  const start_date = req.body.start_date
  const salary = req.body.salary
  db.query(
    "INSERT INTO managers (name, position, office, age, start_date, salary)VALUES (?,?,?,?,?,?)",
    [name, position, office, age, start_date, salary],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values inserted")
      }
    }
  )
});
app.get("/list", (req, res) => {
  db.query("select * from managers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/register", (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  db.query(
    "INSERT INTO users (username, email, password)VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values inserted")
      }
    }
  )
});

app.listen(3001, () => {
  console.log("server is running")
})
