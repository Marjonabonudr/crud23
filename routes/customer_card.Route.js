const express = require('express');
const router = express.Router();

const customerCardController = require('../controller/customer_card.Controller');


/**
 * @swagger
 * tags:
 *   name: Customer Cards
 *   description: Customer Card management
 */

/**
 * @swagger
 * /api/customer_cards:
 *   post:
 *     tags: [Customer Cards]
 *     summary: Create a new customer card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: integer
 *               month:
 *                 type: integer
 *               is_active:
 *                 type: boolean
 *               is_main:                
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Customer Card created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/customer_cards', customerCardController.createCustomerCard);      


/** 
 * @swagger
 * /api/customer_cards:
 *   get: 
 *     tags: [Customer Cards]
 *     summary: Get all customer cards
 *     responses:
 *       '200':
 *         description: List of customer cards
 *       '500':
 *         description: Server error
 */ 
router.get('/customer_cards', customerCardController.getCustomerCards);


/**
 * @swagger
 * /api/customer_cards/{id}:    
 *   get: 
 *     tags: [Customer Cards]
 *     summary: Get a customer card by ID   
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer  
 *         required: true
 *         description: Customer Card ID
 *     responses:
 *       '200':
 *         description: Customer Card details
 *       '404':
 *         description: Customer Card not found
 *       '500':
 *         description: Server error
 */
router.get('/customer_cards/:id', customerCardController.getCustomerCardById);


/**
 * @swagger
 * /api/customer_cards/{id}:
 *   put:
 *     tags: [Customer Cards]
 *     summary: Update a customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer    
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: integer
 *               month:
 *                 type: integer
 *               is_active:
 *                 type: boolean
 *               is_main:   
 *                 type: boolean
 *     responses:
 *       '200': 
 *         description: Customer Card updated
 *       '404':
 *         description: Customer Card not found
 *       '500': 
 *         description: Server error
 */
router.put('/customer_cards/:id', customerCardController.updateCustomerCard);


/**
 * @swagger
 * /api/customer_cards/{id}:
 *   delete:
 *     tags: [Customer Cards]
 *     summary: Delete a customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer  
 *         required: true
 *         description: Customer Card ID
 *     responses:
 *       '200':
 *         description: Customer Card deleted
 *       '404':
 *         description: Customer Card not found
 *       '500':
 *         description: Server error
 */
router.delete('/customer_cards/:id', customerCardController.deleteCustomerCard);



/**
 * @swagger
 * /api/customer_cards/search:
 *   get:
 *     tags: [Customer Cards]
 *     summary: Search customer cards by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for customer cards
 *     responses:
 *       '200':
 *         description: List of customer cards matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/customer_cards/search', customerCardController.searchCustomerCard);

module.exports = router;

