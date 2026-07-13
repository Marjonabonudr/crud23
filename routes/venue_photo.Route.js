const express = require('express');
const router = express.Router();

const venue_photoController = require('../controller/venue_photo.Controller');


/**
 * @swagger
 * tags:
 *   name: Venue Photos
 *   description: Venue Photo management
 */



/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     tags: [Venue Photos]
 *     summary: Create a new venue photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Venue photo created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/venue-photos', venue_photoController.createVenuePhotos);



/**
 * @swagger
 * /api/venue-photos:
 *   get: 
 *     tags: [Venue Photos]
 *     summary: Get all venue photos
 *     responses:
 *       '200':
 *         description: List of venue photos
 *       '500':
 *         description: Server error
 */
router.get('/venue-photos', venue_photoController.getVenuePhotos);


/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     tags: [Venue Photos]
 *     summary: Get a venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Photo ID
 *     responses:
 *       '200': 
 *         description: Venue photo details
 *       '404':
 *         description: Venue photo not found
 *       '500':
 *         description: Server error
 */
router.get('/venue-photos/:id', venue_photoController.getVenuePhotosById);



/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     tags: [Venue Photos]
 *     summary: Update a venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Venue photo updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Venue photo not found
 *       '500': 
 *         description: Server error
 */
router.put('/venue-photos/:id', venue_photoController.updateVenuePhotos);




/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     tags: [Venue Photos]
 *     summary: Delete a venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Venue Photo ID
 *     responses:
 *       '200':
 *         description: Venue photo deleted 
 *       '404':
 *         description: Venue photo not found
 *       '500':
 *         description: Server error
 */
router.delete('/venue-photos/:id', venue_photoController.deleteVenuePhotos);


module.exports = router;