const express = require('express');
const router = express.Router();

const customer_addressController = require('../controller/customer_address.Controller');


/**
 * @swagger
 * tags:
 *   name: Customer Addresses
 *   description: Customer Address management
 */



/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     tags: [Customer Addresses]
 *     summary: Create a new customer address
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
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: integer
 *               info:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Customer Address created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/customer-addresses', customer_addressController.createCustomerAddress);



/**
 * @swagger
 * /api/customer-addresses:
 *   get: 
 *     tags: [Customer Addresses]
 *     summary: Get all customer addresses
 *     responses:
 *       '200':
 *         description: List of customer addresses
 *       '500':
 *         description: Server error
 */
router.get('/customer-addresses', customer_addressController.getCustomerAddresses);


/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     tags: [Customer Addresses]
 *     summary: Get a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Address ID
 *     responses:
 *       '200': 
 *         description: Customer Address details
 *       '404':
 *         description: Customer Address not found
 *       '500':
 *         description: Server error
 */
router.get('/customer-addresses/:id', customer_addressController.getCustomerAddressById);



/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     tags: [Customer Addresses]
 *     summary: Update a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Address ID
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
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: integer
 *               info:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Customer Address updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Customer Address not found
 *       '500': 
 *         description: Server error
 */
router.put('/customer-addresses/:id', customer_addressController.updateCustomerAddress);



/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     tags: [Customer Addresses]
 *     summary: Delete a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Customer Address ID
 *     responses:
 *       '200':
 *         description: Customer Address deleted
 *       '404':
 *         description: Customer Address not found
 *       '500':
 *         description: Server error
 */
router.delete('/customer-addresses/:id', customer_addressController.deleteCustomerAddress);



/**
 * @swagger
 * /api/customer-addresses/search:
 *   get:
 *     tags: [Customer Addresses]
 *     summary: Search customer addresses by name or description
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for customer addresses
 *     responses:
 *       '200':
 *         description: List of customer addresses matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/customer-addresses/search', customer_addressController.searchCustomerAddresses);

module.exports = router;