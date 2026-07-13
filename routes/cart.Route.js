const express = require('express');
const router = express.Router();

const cartController = require('../controller/cart.Controller');


/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Cart management
 */



/**
 * @swagger
 * /api/carts:
 *   post:
 *     tags: [Carts]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               created_at:
 *                 type: string
 *               finished_at:
 *                 type: string
 *               status_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Cart created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/carts', cartController.createCart);


/**
 * @swagger
 * /api/carts:
 *   get: 
 *     tags: [Carts]
 *     summary: Get all carts
 *     responses:
 *       '200':
 *         description: List of carts
 *       '500':
 *         description: Server error
 */
router.get('/carts', cartController.getCarts);


/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     tags: [Carts]
 *     summary: Get a cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       '200': 
 *         description: Cart details
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
router.get('/carts/:id', cartController.getCartById);


/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     tags: [Carts]
 *     summary: Update a cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               created_at:
 *                 type: string
 *               finished_at:
 *                 type: string
 *               status_id:
 *                 type: integer
 *     responses:
 *       '200': 
 *         description: Cart updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Cart not found
 *       '500': 
 *         description: Server error
 */
router.put('/carts/:id', cartController.updateCart);


/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     tags: [Carts]
 *     summary: Delete a cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       '200':
 *         description: Cart deleted 
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
router.delete('/carts/:id', cartController.deleteCart);


/**
 * @swagger
 * /api/carts/search:
 *   get:
 *     tags: [Carts]
 *     summary: Search carts by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for carts
 *     responses:
 *       '200':
 *         description: List of carts matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/carts/search', cartController.searchCarts);


module.exports = router;