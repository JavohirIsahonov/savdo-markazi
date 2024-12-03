const { Router } = require('express');
const router = Router();
const { createproduct, getallproduct, deleteproductbyid, updateproductbyid, getproductbyid } = require('../controller/products.controller');

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     description: Add a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - image
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       400:
 *         description: Bad request.
 */
router.post('/create', createproduct);

/**
 * @swagger
 * /api/products/all:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: List of all products.
 *       500:
 *         description: Internal server error.
 */
router.get('/all', getallproduct);

/**
 * @swagger
 * /api/products/get/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     description: Retrieve a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully.
 *       404:
 *         description: Product not found.
 */
router.get('/get/:id', getproductbyid);

/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     description: Remove a product from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete('/delete/:id', deleteproductbyid);

/**
 * @swagger
 * /api/products/update/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     description: Update the details of a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               description:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 *       400:
 *         description: Bad request.
 */
router.put('/update/:id', updateproductbyid);

module.exports = router;
