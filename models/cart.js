const mongoose = require('mongoose');



const cartItemSchema = new mongoose.Schema({

    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },

    quantity: {
        type: Number,
        default: 1,
        min: [0, 'Amount should be positive']
    }

});



const cartSchema = new mongoose.Schema(
    {

        user: {
            required: true,
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        
        items: [cartItemSchema],

    });

module.exports = mongoose.model('ShoopingCart', cartSchema);