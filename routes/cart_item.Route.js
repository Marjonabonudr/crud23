const express = require('express');
const router = express.Router();

const cart_itemController = require('../controller/cart_item.Controller');


/**
 * @swagger
 * tags:
 *   name: Cart Items
 *   description: Cart Item management
 */



/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     tags: [Cart Items]
 *     summary: Create a new cart item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Cart Item created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/cart-items', cart_itemController.createCartItem);


/**
 * @swagger
 * /api/cart-items:
 *   get: 
 *     tags: [Cart Items]
 *     summary: Get all cart items
 *     responses:
 *       '200':
 *         description: List of cart items
 *       '500':
 *         description: Server error
 */
router.get('/cart-items', cart_itemController.getCartItems);


/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     tags: [Cart Items]
 *     summary: Get a cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart Item ID
 *     responses:
 *       '200': 
 *         description: Cart Item details
 *       '404':
 *         description: Cart Item not found
 *       '500':
 *         description: Server error
 */
router.get('/cart-items/:id', cart_itemController.getCartItemById);


/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     tags: [Cart Items]
 *     summary: Update a cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart Item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       '200': 
 *         description: Cart Item updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Cart Item not found
 *       '500': 
 *         description: Server error
 */
router.put('/cart-items/:id', cart_itemController.updateCartItem);


/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     tags: [Cart Items]
 *     summary: Delete a cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Cart Item ID
 *     responses:
 *       '200':
 *         description: Cart Item deleted 
 *       '404':
 *         description: Cart Item not found
 *       '500':
 *         description: Server error
 */
router.delete('/cart-items/:id', cart_itemController.deleteCartItem);



module.exports = router;