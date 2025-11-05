const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// STUB: Products API Endpoints
// GET /api/products - Get all products
app.get('/api/products', (req, res) => {
  // TODO: Fetch from MongoDB
  res.json({
    status: 'success',
    message: 'Products endpoint (stub)',
    data: []
  });
});

// GET /api/products/:id - Get product by ID
app.get('/api/products/:id', (req, res) => {
  // TODO: Fetch specific product from MongoDB
  res.json({
    status: 'success',
    message: `Product ${req.params.id} endpoint (stub)`,
    data: {}
  });
});

// POST /api/products - Create new product (admin)
app.post('/api/products', (req, res) => {
  // TODO: Validate and save to MongoDB
  res.json({
    status: 'success',
    message: 'Product created (stub)',
    data: {}
  });
});

// STUB: Bundles API Endpoints
// GET /api/bundles - Get all bundles
app.get('/api/bundles', (req, res) => {
  // TODO: Fetch from MongoDB
  res.json({
    status: 'success',
    message: 'Bundles endpoint (stub)',
    data: []
  });
});

// GET /api/bundles/:id - Get bundle by ID
app.get('/api/bundles/:id', (req, res) => {
  // TODO: Fetch specific bundle from MongoDB
  res.json({
    status: 'success',
    message: `Bundle ${req.params.id} endpoint (stub)`,
    data: {}
  });
});

// POST /api/bundles - Create new bundle (admin)
app.post('/api/bundles', (req, res) => {
  // TODO: Validate and save to MongoDB
  res.json({
    status: 'success',
    message: 'Bundle created (stub)',
    data: {}
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`LionsMax API Server running on port ${PORT}`);
});

module.exports = app;
