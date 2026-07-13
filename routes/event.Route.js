const express = require('express');
const router = express.Router();

const eventController = require('../controller/event.Controller');

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event management
 */


/**
 * @swagger
 * /api/events:
 *   post:
 *     tags: [Events]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:  
 *                 type: string
 *     responses:
 *       '201':
 *         description: Event created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/events', eventController.createEvent);


/**
 * @swagger
 * /api/events:
 *   get: 
 *     tags: [Events]
 *     summary: Get all events
 *     responses:
 *       '200':
 *         description: List of events
 *       '500':
 *         description: Server error
 */
router.get('/events', eventController.getEvents);


/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags: [Events]
 *     summary: Get an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       '200': 
 *         description: Event details
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */
router.get('/events/:id', eventController.getEventById);


/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Events]
 *     summary: Update an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Event updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Event not found
 *       '500': 
 *         description: Server error
 */
router.put('/events/:id', eventController.updateEvent);


/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     tags: [Events]
 *     summary: Delete an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       '200':
 *         description: Event deleted 
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */
router.delete('/events/:id', eventController.deleteEvent);


/**
 * @swagger
 * /api/events/search:
 *   get:
 *     tags: [Events]
 *     summary: Search events by name or description
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for events
 *     responses:
 *       '200':
 *         description: List of events matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/events/search', eventController.searchEvents);


module.exports = router;