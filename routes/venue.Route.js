const express = require('express');
const router = express.Router();

const venueController = require('../controller/venue.Controller');


/**
 * @swagger
 * tags:
 *   name: Venues
 *   description: Venue management
 */



/**
 * @swagger
 * /api/venues:
 *   post:
 *     tags: [Venues]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Venue created 
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/venues', venueController.createVenue);



/**
 * @swagger
 * /api/venues:
 *   get: 
 *     tags: [Venues]
 *     summary: Get all venues
 *     responses:
 *       '200':
 *         description: List of venues
 *       '500':
 *         description: Server error
 */
router.get('/venues', venueController.getVenues);



/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     tags: [Venues]
 *     summary: Get a venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       '200': 
 *         description: Venue details
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server error
 */
router.get('/venues/:id', venueController.getVenueById);



/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     tags: [Venues]
 *     summary: Update a venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       '200': 
 *         description: Venue updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Venue not found
 *       '500': 
 *         description: Server error
 */
router.put('/venues/:id', venueController.updateVenue);



/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     tags: [Venues]
 *     summary: Delete a venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       '200':
 *         description: Venue deleted 
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server error
 */
router.delete('/venues/:id', venueController.deleteVenue);


/**
 * @swagger
 * /api/venues/search:
 *   get:
 *     tags: [Venues]
 *     summary: Search venues by name or description
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for venues name or description
 *     responses:
 *       '200':
 *         description: List of venues matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/venues/search', venueController.searchVenues);


module.exports = router;