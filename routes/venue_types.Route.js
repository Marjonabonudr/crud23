const express = require('express');
const router = express.Router();

const venue_typesController = require('../controller/venue_types.Controller');


/**
 * @swagger
 * tags:
 *   name: Venue Types
 *   description: Venue type management
 */



/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     tags: [Venue Types]
 *     summary: Create a new venue type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Venue type created
 *       '400': 
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/venue-types', venue_typesController.createVenueTypes);



/**
 * @swagger
 * /api/venue-types:
 *   get: 
 *     tags: [Venue Types]
 *     summary: Get all venue types
 *     responses:
 *       '200':
 *         description: List of venue types
 *       '500':
 *         description: Server error
 */
router.get('/venue-types', venue_typesController.getVenueTypes);




/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     tags: [Venue Types]
 *     summary: Get a venue type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Type ID
 *     responses:
 *       '200': 
 *         description: Venue type details
 *       '404':
 *         description: Venue type not found
 *       '500':
 *         description: Server error
 */
router.get('/venue-types/:id', venue_typesController.getVenueTypesById);



/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     tags: [Venue Types]
 *     summary: Update a venue type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       '200': 
 *         description: Venue type updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Venue type not found
 *       '500': 
 *         description: Server error
 */
router.put('/venue-types/:id', venue_typesController.updateVenueTypes);



/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     tags: [Venue Types]
 *     summary: Delete a venue type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Venue Type ID
 *     responses:
 *       '200':
 *         description: Venue type deleted 
 *       '404':
 *         description: Venue type not found
 *       '500':
 *         description: Server error
 */
router.delete('/venue-types/:id', venue_typesController.deleteVenueTypes);


module.exports = router;