const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "T-Jay1412",
  database: "transhende",
});

// Connect to database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

// POST route to insert form data
app.post("/submit", (req, res) => {
  const data = req.body;

  const sql = `INSERT INTO client (
  first_name, last_name, date_of_birth, gender, district, 
  telephone1, telephone2, doctor, mobility, insurance,
  expiry_date, details, contact_person1, contact_telephone1, contact_person2,
  contact_telephone2) VALUES (?, ?, ?, ?, ?)`;

  const values = [
    data.first_name,
    data.last_name,
    data.date_of_birth,
    data.gender,
    data.district,
    data.telephone1,
    data.telephone2,
    data.doctor,
    data.mobility,
    data.insurance,
    data.expiry_date,
    data.details,
    data.contact_person1,
    data.contact_telephone1,
    data.contact_person2,
    data.contact_telephone2,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error: ", err);
      res.status(500).send("Database error");
    } else {
      res.send("Data saved successfully!");
    }
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
