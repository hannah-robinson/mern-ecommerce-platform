import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler.js' // For error handling, so that we don't have to keep writing try-catch statements. Both our routes are async because they use Mongoose. Mongoose methods return Promises.
import Product from '../models/productModel.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}) // empty object gets all products, could add setting in the object if you want something different
    res.json(products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    }

    res.status(404).json({ message: 'Product not found' })
  })
)

export default router
