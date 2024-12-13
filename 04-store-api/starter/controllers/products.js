const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  const records = await product.find();
  res.status(200).json(records);
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
