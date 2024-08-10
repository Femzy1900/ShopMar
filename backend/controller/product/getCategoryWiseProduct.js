const productModel = require("../../models/ProductModels")

const getCategoryWiseProduct = async (req, res) => {
    try {
        const {category} = req.body;
        const products = await productModel.find({category})

        res.status(200).json({
            message: "Products found",
            error: false,
            success: true,
            data: products
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseProduct