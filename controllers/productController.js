const Product = require('../models/product');

const getProduct = (req, res, next) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      next(err);
    } else {
      if (product) {
        console.log('Found product:', product);
        res.status(200).json(product);
      } else {
        console.log('Product not found.');
        res.status(404).send('Product not found.');
      }
    }
  });
};

const getAllProducts = (req, res, next) => {
  Product.find().exec((err, products) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(products);
    }
  });
};

const createProduct = (req, res, next) => {
  const newProduct = req.body;

  Product.create(newProduct, (err, product) => {
    if (err) {
      next(err);
    } else {
      console.log('Product successfully created.', product);
      res.status(200).json(product);
    }
  });
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
};
