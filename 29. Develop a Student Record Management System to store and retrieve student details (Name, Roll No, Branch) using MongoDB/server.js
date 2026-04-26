// =======================================
// FILE NAME: server.js
// Backend for Student Record System
// =======================================

// Import express
const express = require("express");

// Import mongoose
const mongoose = require("mongoose");

// Import cors
const cors = require("cors");

// Create app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name:String,
    rollno:String,
    branch:String
});

// Model
const Student = mongoose.model("Student", studentSchema);

// POST - Add student
app.post("/students", async (req,res) =>
{
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({message:"Student Added"});
});

// GET - Show students
app.get("/students", async (req,res) =>
{
    const data = await Student.find();
    res.json(data);
});

// Start server
app.listen(5000, () =>
{
    console.log("Server Running on Port 5000");
});