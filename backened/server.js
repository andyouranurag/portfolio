const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "contact_form_db"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// POST route to handle form submission
app.get("/contact", (req, res) => {
  res.send("This is the form submission page.");
});

app.post("/contact", (req, res) => {
  const { fullname, phone, email, msg } = req.body;

  const query = "INSERT INTO contacts (fullname, phone, email, msg) VALUES (?, ?, ?, ?)";
  db.query(query, [fullname, phone, email, msg], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Form submitted successfully" });
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
