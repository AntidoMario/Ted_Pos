// routers/router.js

const express = require("express");
const path = require("path");
const { login } = require("../controllers/authController");

const routes = express.Router();

// Serve index.html at the /login route
routes.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/index.html'));
});

// Serve the dashboard page after successful login
routes.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/dashboard.html'));
});

// Serve orders.html at the /orders route
routes.get("/orders", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/orders.html'));
});

// Serve takeorders.html at the /takeorders route
routes.get("/takeorders", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/takeorders.html'));
});

// Serve categories.html at the /categories route
routes.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/categories.html'));
});

// Serve products.html at the /categories route
routes.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/products.html'));
});

// Serve products.html at the /categories route
routes.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/user.html'));
});


// Login route
routes.post("/login", login);

module.exports = routes;
