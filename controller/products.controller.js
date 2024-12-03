const asyncHandle = require('../middlewares/async')
const Product = require('../model/products.model')

exports.createproduct = asyncHandle(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success: true,
        data: product 
    })
})

exports.getallproduct = asyncHandle(async (req, res, next) => {
    const product = await Product.find()
    res.status(200).json({
        success: true,
        data: product
    })
})

exports.deleteproductbyid = asyncHandle(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: product
    })
})

exports.updateproductbyid = asyncHandle(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        data: product
    })
})

exports.getproductbyid = asyncHandle(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json({
        success: true,
        data: product
    })
})