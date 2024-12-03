const { Router } = require('express');
const router = Router();
const { register, login, getalluser, deleteuserbyid } = require('../controller/auth.controller');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request.
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     description: Authenticate a user and return a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Unauthorized.
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/all:
 *   get:
 *     summary: Get all users
 *     tags: [Auth]
 *     description: Retrieve a list of all registered users.
 *     responses:
 *       200:
 *         description: List of users.
 *       500:
 *         description: Internal server error.
 */
router.get('/all', getalluser);

/**
 * @swagger
 * /api/auth/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Auth]
 *     description: Remove a user from the database by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
router.delete('/delete/:id', deleteuserbyid);

module.exports = router;
