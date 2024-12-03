const { Router } = require('express');
const router = Router();
const { createorder, getallorder, deleteorderbyid, updateorderbyid, getorderbyid } = require('../controller/order.controller');

/**
 * @swagger
 * /api/orders/create:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     description: Add a new order to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               totalPrice:
 *                 type: number
 *                 format: float
 *             required:
 *               - customerId
 *               - productId
 *               - quantity
 *               - totalPrice
 *     responses:
 *       201:
 *         description: Order created successfully.
 *       400:
 *         description: Bad request.
 */
router.post('/create', createorder);

/**
 * @swagger
 * /api/orders/all:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     description: Retrieve a list of all orders.
 *     responses:
 *       200:
 *         description: List of all orders.
 *       500:
 *         description: Internal server error.
 */
router.get('/all', getallorder);

/**
 * @swagger
 * /api/orders/get/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     description: Retrieve an order by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order retrieved successfully.
 *       404:
 *         description: Order not found.
 */
router.get('/get/:id', getorderbyid);

/**
 * @swagger
 * /api/orders/delete/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     description: Remove an order from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully.
 *       404:
 *         description: Order not found.
 */
router.delete('/delete/:id', deleteorderbyid);

/**
 * @swagger
 * /api/orders/update/{id}:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Orders]
 *     description: Update the details of an order by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               totalPrice:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Order updated successfully.
 *       404:
 *         description: Order not found.
 *       400:
 *         description: Bad request.
 */
router.put('/update/:id', updateorderbyid);

module.exports = router;
