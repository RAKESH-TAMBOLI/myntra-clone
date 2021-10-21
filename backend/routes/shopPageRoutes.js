import express from 'express'
const router = express.Router()
import {
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
} from '../controllers/shopPageControllers.js'
import { protect, admin } from '../middleware/authMiddelware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/brand/:brand').get(getBrandProducts)
router.route('/categories/:categories').get(getCategoriesProducts)
router.route('/color/:color').get(getColorProducts)
router.route('/gender/:gender').get(getGenderProducts)
router
    .route('/product/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)
export default router
