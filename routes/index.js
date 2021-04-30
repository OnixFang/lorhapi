const router = require('express').Router();
const { getProduct, getAllProducts, createProduct } = require('../controllers/productController');

// Products API
router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);

// 404 Error handler
router.use((req, res, next) => {
  res.status(404).send('Error 404: Resource not found.');
});

// Error handler
router.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

module.exports = router;
