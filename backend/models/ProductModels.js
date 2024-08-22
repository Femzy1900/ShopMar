const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [String],
    description: String,
    price: Number,
    sellingPrice: Number,
}, {
    timestamps: true
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

