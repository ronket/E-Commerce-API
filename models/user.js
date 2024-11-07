const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: [6, "your password should be at least 6 characters"]
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);


