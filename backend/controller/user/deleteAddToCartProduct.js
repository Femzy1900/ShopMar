const AddToCartModel = require("../../models/cartProduct")

const deleteCart = async (req, res) => {
    try {
        const currentUserId = req.userId;
        const cardProductId = req.body._id;

        const deleteProduct = await AddToCartModel.findOneAndDelete({
            _id: cardProductId,
            userId: currentUserId
        })

        if (!deleteProduct) {
            return res.status(404).json({
                message: "Product not found or you are not authorized to delete this account",
                success: false,
                error: true
            });
        }

        res.json ({
            message: "Product deleted successfully",
            success: true,
            error: false
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = deleteCart