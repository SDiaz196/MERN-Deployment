const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema(
    {
        Store: {
            type: String,
            required: [true, '{PATH} is required!'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters!!']
        },
        StoreNumber: {
            type: Number,
            required: [true, '{PATH} is required!'],
            min:[1, '{PATH} must be greater than {MIN}']
        },
        Open: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
)

const Store = mongoose.model('Store', StoreSchema)

module.exports = { Store }