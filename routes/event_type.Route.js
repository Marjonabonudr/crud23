const express = require('express');
const router = express.Router();

const event_typeController = require('../controller/event_type.Controller');

/**
 * @swagger
 * tags:
 *   name: Event Types
 *   description: Event Type management
 */



/**
 * @swagger
 * /api/event-types:
 *   post:
 *     tags: [Event Types]
 *     summary: Create a new event type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Event Type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/event-types', event_typeController.createEventType);



/**
 * @swagger
 * /api/event-types:
 *   get: 
 *     tags: [Event Types]
 *     summary: Get all event types
 *     responses:
 *       '200':
 *         description: List of event types
 *       '500':
 *         description: Server error
 */
/**
 * @swagger
 * /api/event-types:
 *   get: 
 *     tags: [Event Types]
 *     summary: Get all event types
 *     responses:
 *       '200':
 *         description: List of event types
 *       '500':
 *         description: Server error
 */
router.get('/event-types', event_typeController.getEventTypes);


/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     tags: [Event Types]
 *     summary: Get a event type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event Type ID
 *     responses:
 *       '200': 
 *         description: Event Type details
 *       '404':
 *         description: Event Type not found
 *       '500':
 *         description: Server error
 */
router.get('/event-types/:id', event_typeController.getEventTypeById);


/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     tags: [Event Types]
 *     summary: Update a event type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event Type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       '200': 
 *         description: Event Type updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Event Type not found
 *       '500': 
 *         description: Server error
 */
router.put('/event-types/:id', event_typeController.updateEventType);


/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     tags: [Event Types]
 *     summary: Delete a event type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Event Type ID
 *     responses:
 *       '200':
 *         description: Event Type deleted
 *       '404':
 *         description: Event Type not found
 *       '500':
 *         description: Server error
 */
router.delete('/event-types/:id', event_typeController.deleteEventType);


module.exports = router;