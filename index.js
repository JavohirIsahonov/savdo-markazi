// importent
const express = require("express")
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandle = require('./middlewares/error')
const { swaggerUi, swaggerDocs } = require('./swager');

// App fail
const app = express();
// .env
dotenv.config()

// Body parser 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// MongoDb server
connectDB()
// Routes
app.use('/api/auth', require('./router/auth.router'))
app.use('/api/products', require('./router/products.router'))
app.use('/api/orders', require('./router/order.router'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error
app.use(errorHandle)
// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) {
        console.log(`Xatolik serverga ${err}`.bgRed)
    }
    console.log(`Eshityapman baqirma ${PORT}`.bgBlue)
})