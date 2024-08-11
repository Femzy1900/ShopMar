const userModel = require("../../models/userModel")

async function userDetailsController(req, res) {
    try {
        console.log("userId", req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            message: "User details",
            data: user,
            error: false,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            message: "Error fetching user",
            error: true,
            success: false
        })
    }
}

module.exports = userDetailsController