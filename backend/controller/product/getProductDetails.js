const productModel = require("../../models/productModels")

const getProductDetail = async (req, res) => {
    try {

        const { productId } = req.body

        const product = await productModel.findById(productId)

        if (!product) {
            console.error('Product not found for productId:', productId)
            return res.status(404).json({
                message: "Product not found",
                success: false,
                error: true
            });
        }

        console.log('Fetched product data:', product);

        res.json({
            data: product,
            message: "Get product Success",
            success: true,
            error: false
        })
        
    } catch (error) {
        console.error("Error fetching products details", error)
        res.status(500).json({
            message: error.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = getProductDetail