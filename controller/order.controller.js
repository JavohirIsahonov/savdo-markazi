const asyncHandle = require('../middlewares/async')
const User = require('../model/order.model')


exports.createorder = asyncHandle(async (req, res, next) => {
    const order = await User.create(req.body)
    res.status(200).json({
        success: true,
        data: order 
    })
})

exports.getallorder = asyncHandle(async (req, res, next) => {
    const order = await User.find()
    res.status(200).json({
        success: true,
        data: order
    })
})

exports.deleteorderbyid = asyncHandle(async (req, res, next) => {
    const order = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: order
    })
})

exports.updateorderbyid = asyncHandle(async (req, res, next) => {
    const order = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        data: order
    })
})

exports.getorderbyid = asyncHandle(async (req, res, next) => {
    const order = await User.findById(req.params.id)
    res.status(200).json({
        success: true,
        data: order
    })
})