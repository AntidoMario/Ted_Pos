const express = require("express");
const path = require("path");
const { login } = require("../controllers/authController");

const routes = express.Router();

// Serve index.ejs at the /login route
routes.get("/login", (req, res) => {
  res.render("index"); // No need for file extension if you're using EJS
});

// Serve dashboard.ejs after successful login
routes.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// Serve orders.ejs at the /orders route
routes.get("/orders", (req, res) => {
  res.render("orders");
});

// Serve takeorders.ejs at the /takeorders route
routes.get("/takeorders", (req, res) => {
  res.render("takeorders");
});

// Serve categories.ejs at the /categories route
routes.get("/categories", (req, res) => {
  res.render("categories");
});

// Serve products.ejs at the /products route
routes.get("/products", (req, res) => {
  res.render("products");
});

// Serve user.ejs at the /users route
routes.get("/users", (req, res) => {
  res.render("user");
});

// Serve bundles.ejs at the /bundles route
routes.get("/bundles", (req, res) => {
  res.render("bundles");
});

// Serve bundles.ejs at the /bundles route
routes.get("/suppliers", (req, res) => {
  res.render("suppliers");
});

// Login route
routes.post("/login", login);

module.exports = routes;
