const express = require('express');
const router = express.Router();

const seatController = require('../controller/seat.Controller');


/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seat management
 */



/**
 * @swagger
 * /api/seats:
 *   post:
 *     tags: [Seats]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: string
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Seat created 
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/seats', seatController.createSeat);



/**
 * @swagger
 * /api/seats:
 *   get: 
 *     tags: [Seats]
 *     summary: Get all seats
 *     responses:
 *       '200':
 *         description: List of seats
 *       '500':
 *         description: Server error
 */
router.get('/seats', seatController.getSeats);



/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     tags: [Seats]
 *     summary: Get a seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       '200': 
 *         description: Seat details
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */
router.get('/seats/:id', seatController.getSeatById);


/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seats]
 *     summary: Update a seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true 
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: string
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               location_in_schema:
 *                type: string
 *     responses:
 *       '200': 
 *         description: Seat updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Seat not found
 *       '500': 
 *         description: Server error
 */
router.put('/seats/:id', seatController.updateSeat);



/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     tags: [Seats]
 *     summary: Delete a seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       '200':
 *         description: Seat deleted 
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */
router.delete('/seats/:id', seatController.deleteSeat);



/**
 * @swagger
 * /api/seats/search:
 *   get:
 *     tags: [Seats]
 *     summary: Search seats by sector or location
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for seats sector or location
 *     responses:
 *       '200':
 *         description: List of seats matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/seats/search', seatController.searchSeats);


module.exports = router;