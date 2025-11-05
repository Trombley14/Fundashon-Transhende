import dotenv from "dotenv";
dotenv.config();
console.log("Loaded ENV:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  db: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});
import express from "express";
import cors from "cors";
import pool from "./db.js";

(async () => {
  try {
    const [rows] = await pool.query("SELECT NOW()");
    console.log("✅ Database connected:", rows);
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
})();

const app = express();
app.use(cors());
app.use(express.json()); // allow JSON request bodies

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Fetch all clients
app.get("/api/clients", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM transhende.client");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching clients" });
  }
});

// Create new client
app.post("/api/clients", async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    district,
    phone1,
    phone2,
    doctor,
    mobility,
    insurance,
    expiryDate,
    details,
    contactPerson1,
    contactPhone1,
    contactPerson2,
    contactPhone2,
    address,
  } = req.body;

  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "First and last name are required" });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO client (first_name, last_name, date_of_birth, 
      gender, district, telephone1, telephone2, doctor, 
      mobility, insurance, expiry_date, details, 
      contact_person1, contact_telephone1, contact_person2, contact_telephone2)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstName,
        lastName,
        dateOfBirth,
        gender,
        district,
        phone1,
        phone2,
        doctor,
        mobility,
        insurance,
        expiryDate,
        details,
        contactPerson1,
        contactPhone1,
        contactPerson2,
        contactPhone2,
        address,
      ]
    );

    res.status(201).json({
      message: "Client added successfully",
      clientId: result.insertId,
    });
  } catch (err) {
    console.error("Error inserting client:", err);
    res.status(500).json({ message: "Database insert failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
