const express = require('express');
const router = express.Router();

const delivery_methodController = require('../controller/delivery_method.Controller');

/**
 * @swagger
 * tags:
 *   name: Delivery Methods
 *   description: Delivery Method management
 */


/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     tags: [Delivery Methods]
 *     summary: Create a new delivery method
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
 *         description: Delivery Method created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/delivery-methods', delivery_methodController.createDeliveryMethod);




/**
 * @swagger
 * /api/delivery-methods:
 *   get: 
 *     tags: [Delivery Methods]
 *     summary: Get all delivery methods
 *     responses:
 *       '200':
 *         description: List of delivery methods
 *       '500':
 *         description: Server error
 */
router.get('/delivery-methods', delivery_methodController.getDeliveryMethods);


/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     tags: [Delivery Methods]
 *     summary: Get a delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery Method ID
 *     responses:
 *       '200': 
 *         description: Delivery Method details
 *       '404':
 *         description: Delivery Method not found
 *       '500':
 *         description: Server error
 */
router.get('/delivery-methods/:id', delivery_methodController.getDeliveryMethodById);



/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     tags: [Delivery Methods]
 *     summary: Update a delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery Method ID
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
 *         description: Delivery Method updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Delivery Method not found
 *       '500': 
 *         description: Server error
 */
router.put('/delivery-methods/:id', delivery_methodController.updateDeliveryMethod);


/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     tags: [Delivery Methods]
 *     summary: Delete a delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Delivery Method ID
 *     responses:
 *       '200':
 *         description: Delivery Method deleted 
 *       '404':
 *         description: Delivery Method not found
 *       '500':
 *         description: Server error
 */
router.delete('/delivery-methods/:id', delivery_methodController.deleteDeliveryMethod);


module.exports = router;