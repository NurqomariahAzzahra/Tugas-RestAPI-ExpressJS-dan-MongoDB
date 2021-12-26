import mongoose from "mongoose";

// Membuat Schema
const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }

});


export default mongoose.model('Products', Product);