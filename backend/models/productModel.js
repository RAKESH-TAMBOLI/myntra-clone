import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
    {
        name: String,
        rating: { type: Number },
        comment: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

const productSchema = mongoose.Schema(
    {
        user: {
            // relation between user and product
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        img: String,
        brand: String,
        name: String,
        categories: String,
        color: String,
        gender: String,
        description: String,
        rating: { type: Number, default: 0 },
        reviews: [reviewSchema],
        numReviews: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            default: 0,
        },
        countInStock: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product
