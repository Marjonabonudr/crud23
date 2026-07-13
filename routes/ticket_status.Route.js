const express = require('express');
const router = express.Router();

const ticket_statusController = require('../controller/ticket_status.Controller');

/**
 * @swagger
 * tags:
 *   name: Ticket Statuses
 *   description: Ticket Status management
 */



/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [Ticket Statuses]
 *     summary: Create a new ticket status
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
 *         description: Ticket Status created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/ticket-statuses', ticket_statusController.createTicketStatus);



/**
 * @swagger
 * /api/ticket-statuses:
 *   get: 
 *     tags: [Ticket Statuses]
 *     summary: Get all ticket statuses
 *     responses:
 *       '200':
 *         description: List of ticket statuses
 *       '500':
 *         description: Server error
 */
router.get('/ticket-statuses', ticket_statusController.getTicketStatuses);


/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [Ticket Statuses]
 *     summary: Get a ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket Status ID
 *     responses:
 *       '200': 
 *         description: Ticket Status details
 *       '404':
 *         description: Ticket Status not found
 *       '500':
 *         description: Server error
 */
router.get('/ticket-statuses/:id', ticket_statusController.getTicketStatusById);



/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [Ticket Statuses]
 *     summary: Update a ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket Status ID
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
 *         description: Ticket Status updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Ticket Status not found
 *       '500': 
 *         description: Server error
 */
router.put('/ticket-statuses/:id', ticket_statusController.updateTicketStatus);



/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [Ticket Statuses]
 *     summary: Delete a ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Ticket Status ID
 *     responses:
 *       '200':
 *         description: Ticket Status deleted
 *       '404':
 *         description: Ticket Status not found
 *       '500':
 *         description: Server error
 */
router.delete('/ticket-statuses/:id', ticket_statusController.deleteTicketStatus);


module.exports = router;