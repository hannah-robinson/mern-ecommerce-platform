import asyncHandler from '../middleware/asyncHandler.js' // For error handling, so that we don't have to keep writing try-catch statements. Both our routes are async because they use Mongoose. Mongoose methods return Promises.
import Product from '../models/productModel.js'

// @desc  Fetch all products
// @route  GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) // empty object gets all products, could add setting in the object if you want something different
  res.json(products)
})

// @desc  Fetch a product
// @route  GET /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  }
  res.status(404)
  throw new Error('Resource not found')
})

export { getProducts, getProductById }
