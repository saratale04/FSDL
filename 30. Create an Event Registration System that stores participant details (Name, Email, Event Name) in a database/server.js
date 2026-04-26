// =======================================
// FILE NAME: server.js
// Backend for Event Registration System
// =======================================

// Import express
const express = require("express");

// Import mongoose
const mongoose = require("mongoose");

// Import cors
const cors = require("cors");

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eventDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const participantSchema = new mongoose.Schema({
    name:String,
    email:String,
    eventname:String
});

// Model
const Participant = mongoose.model("Participant", participantSchema);

// POST route
app.post("/participants", async (req,res) =>
{
    const newParticipant = new Participant(req.body);
    await newParticipant.save();
    res.json({message:"Registered"});
});

// GET route
app.get("/participants", async (req,res) =>
{
    const data = await Participant.find();
    res.json(data);
});

// Start server
app.listen(5000, () =>
{
    console.log("Server Running on Port 5000");
});