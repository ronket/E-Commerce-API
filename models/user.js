const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
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


userSchema.pre('save', async function (next){

    if (!this.isModified('password')){
        return;
    }
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.comparePassword = async function(candidatePassword){
    const isValid = bcrypt.compare(candidatePassword, this.password);
    return isValid;
}


    





module.exports = mongoose.model('User', userSchema);


