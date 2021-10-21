import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc      Fetch all Brand Product
// @route     GET /api/shopProducts/brand
// @access    public
const getBrandProducts = asyncHandler(async (req, res) => {
    const brand = await Product.find({ brand: req.params.brand })
    // console.log(brand)
    res.json(brand)
})

// @desc     Fetch all Categoriers Product
// @route    GET api/shopProducts/categories
// @access   public
const getCategoriesProducts = asyncHandler(async (req, res) => {
    const categories = await Product.find({
        categories: req.params.categories,
    })
    res.json(categories)
})

// @desc     Fetch all Color Products
// @route    GET /api/shopProducts/color
// @access   public
const getColorProducts = asyncHandler(async (req, res) => {
    const color = await Product.find({ color: req.params.color })
    res.json(color)
})

// @desc     Fetch all Gender Products
// @route    Get /api/shopProducts/gender
// @access   public
const getGenderProducts = asyncHandler(async (req, res) => {
    const gender = await Product.find({ gender: req.params.gender })
    res.json(gender)
})

// @desc     Fetch all Gender Products
// @route    Get /api/shopProducts/gender
// @access   public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    // console.log(product)
    res.json(product)
})
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  private/admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Create a product
// @route   POST /api/products
// @access  private/admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id, // logged in user
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private/admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } =
        req.body

    const product = await Product.findById(req.params.id) // id is in the URL

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  private
const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    // get product
    const product = await Product.findById(req.params.id)

    if (product) {
        const alreadyReviewed = product.reviews.find(
            review => review.user.toString() === req.user._id.toString()
        )

        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        }

        // push to product's review array
        product.reviews.push(review)
        // update the products overall no. of reviews
        // update the overall rating. So total of each review rating divided by the num of reviews
        product.numReviews = product.reviews.length
        product.rating =
            product.reviews.reduce(
                (acc, currItem) => currItem.rating + acc,
                0
            ) / product.reviews.length

        // Save product
        await product.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getBrandProducts,
    getCategoriesProducts,
    getColorProducts,
    getGenderProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getProducts,
}
