const AddToCartModel = require("../../models/CartProduct")

const addToCartView = async (req, res) => {
    try {
        const currentUser = req.userId
        const allproduct = await AddToCartModel.find({
            userId: currentUser
        }).populate("productId")

        res.json({
            data: allproduct,
            success: true,
            error: false
        })

    } catch(error) {
        res.json({
            message: error?.message || err,
            error: true, 
            success: false
        })

    }
}

module.exports = addToCartView