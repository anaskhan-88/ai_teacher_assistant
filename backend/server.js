// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Error:", err));

// // ✅ Test Route
// app.get("/test", (req, res) => {
//   res.json({ message: "Server OK" });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then ( () => console.log("MongoDB Connected"))
.catch(err => console.error("Error", err));

app.get("/test", (req,res) =>
{
    res.json({massage : "Server OK"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));