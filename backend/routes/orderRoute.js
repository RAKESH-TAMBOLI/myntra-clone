import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
    getMyOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddelware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
