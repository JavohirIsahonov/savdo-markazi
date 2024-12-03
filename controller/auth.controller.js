const asyncHandle = require('../middlewares/async')
const User = require('../model/auth.model')

exports.register = asyncHandle(async (req, res, next) => {
    const user = await User.create(req.body)
    res.status(200).json({
        success: true,
        data: user 
    })
})

exports.login = asyncHandle(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: "Please provide email and password"
        })
}}) 

exports.getalluser = asyncHandle(async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({
        success: true,
        data: users
    })
})

exports.deleteuserbyid = asyncHandle(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: user
    })
})

