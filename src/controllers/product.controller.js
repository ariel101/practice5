const products = require('../data/products');

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, price, stock } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  product.name = req.body.name;
  product.price = req.body.price;
  product.stock = req.body.stock;

  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(
    p => p.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  products.splice(index, 1);

  res.json({
    message: 'Product deleted'
  });
};