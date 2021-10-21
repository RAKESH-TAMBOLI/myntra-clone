import express from 'express'
const router = express.Router()
import Razorpay from 'razorpay'
import uniqId from 'uniqid'
import dotenv from 'dotenv'
// configutation
dotenv.config()
const razorPay = new Razorpay({
    key_id: process.env.RAZORPAY_CLIENT_ID,
    key_secret: process.env.SECRET_KEY,
})

router.post('/proceed', async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // amount in smallest currency unit
            currency: 'INR',
            receipt: uniqId(),
        }

        const order = await razorPay.orders.create(options)
        console.log(order)
        if (!order) return res.status(500).send('Some error occured')
        res.json(order)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/success', async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            status,
            amount,
            create_at,
        } = req.body

        res.json({
            msg: 'success',
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            status,
            amount,
            create_at,
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router
