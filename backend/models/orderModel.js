import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        orderItems: [
            {
                name: String,
                qty: Number,
                image: String,
                price: Number,
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
            },
        ],
        shippingAddress: {
            name: String,
            address: String,
            city: String,
            postalCode: String,
            country: String,
            phone: Number,
            email: String,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            // will come from the payment processor
            // id: String,
            // status: String,
            // update_time: String,
            // email_address: String,
            orderCreationId: String,
            razorpayPaymentId: String,
            razorpayOrderId: String,
            razorpaySignature: String,
            amount: String,
            status: String,
            createId: String,
        },
        taxPrice: {
            type: Number,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
