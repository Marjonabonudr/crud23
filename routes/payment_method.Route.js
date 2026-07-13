const express = require('express');
const router = express.Router();

const payment_methodController = require('../controller/payment_method.Controller');

/**
 * @swagger
 * tags:
 *   name: Payment Methods
 *   description: Payment Method management
 */


/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     tags: [Payment Methods]
 *     summary: Create a new payment method
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Payment Method created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/payment-methods', payment_methodController.createPaymentMethod);




/**
 * @swagger
 * /api/payment-methods:
 *   get: 
 *     tags: [Payment Methods]
 *     summary: Get all payment methods
 *     responses:
 *       '200':
 *         description: List of payment methods
 *       '500':
 *         description: Server error
 */
router.get('/payment-methods', payment_methodController.getPaymentMethods);


/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     tags: [Payment Methods]
 *     summary: Get a payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment Method ID
 *     responses:
 *       '200': 
 *         description: Payment Method details
 *       '404':
 *         description: Payment Method not found
 *       '500':
 *         description: Server error
 */
router.get('/payment-methods/:id', payment_methodController.getPaymentMethodById);



/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     tags: [Payment Methods]
 *     summary: Update a payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment Method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Payment Method updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Payment Method not found
 *       '500': 
 *         description: Server error
 */
router.put('/payment-methods/:id', payment_methodController.updatePaymentMethod);


/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     tags: [Payment Methods]
 *     summary: Delete a payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Payment Method ID
 *     responses:
 *       '200':
 *         description: Payment Method deleted 
 *       '404':
 *         description: Payment Method not found
 *       '500':
 *         description: Server error
 */
router.delete('/payment-methods/:id', payment_methodController.deletePaymentMethod);


module.exports = router;