const express = require('express');
const router = express.Router();

const seat_typeController = require('../controller/seat_type.Controller');

/**
 * @swagger
 * tags:
 *   name: Seat Types
 *   description: Seat Type management
 */


/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     tags: [Seat Types]
 *     summary: Create a new seat type
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
 *         description: Seat Type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/seat-types', seat_typeController.createSeatType);


/**
 * @swagger
 * /api/seat-types:
 *   get: 
 *     tags: [Seat Types]
 *     summary: Get all seat types
 *     responses:
 *       '200':
 *         description: List of regions
 *       '500':
 *         description: Server error
 */
router.get('/seat-types', seat_typeController.getSeatTypes);



/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     tags: [Seat Types]
 *     summary: Get a seat type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat Type ID
 *     responses:
 *       '200': 
 *         description: Seat Type details
 *       '404':
 *         description: Seat Type not found
 *       '500':
 *         description: Server error
 */
router.get('/seat-types/:id', seat_typeController.getSeatTypeById);


/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     tags: [Seat Types]
 *     summary: Update a seat type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat Type ID
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
 *         description: Seat Type updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Seat Type not found
 *       '500': 
 *         description: Server error
 */
router.put('/seat-types/:id', seat_typeController.updateSeatType);



/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     tags: [Seat Types]
 *     summary: Delete a seat type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Seat Type ID
 *     responses:
 *       '200':
 *         description: Seat Type deleted 
 *       '404':
 *         description: Seat Type not found
 *       '500':
 *         description: Server error
 */
router.delete('/seat-types/:id', seat_typeController.deleteSeatType);


module.exports = router;