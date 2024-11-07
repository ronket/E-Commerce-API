const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            min: [0, 'Price must be positive']
        },
        quantity: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);