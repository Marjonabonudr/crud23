const express = require('express');
const router = express.Router();

const typesController = require('../controller/types.Controller');


/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Type management
 */



/**
 * @swagger
 * /api/types: 
 *   post:
 *     tags: [Types]
 *     summary: Create a new type
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
 *         description: Type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/types', typesController.createTypes);




/**
 * @swagger
 * /api/types:
 *   get: 
 *     tags: [Types]
 *     summary: Get all types
 *     responses:
 *       '200':
 *         description: List of types
 *       '500':
 *         description: Server error
 */
router.get('/types', typesController.getTypes);


/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get a type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       '200': 
 *         description: Type details
 *       '404':
 *         description: Type not found
 *       '500':
 *         description: Server error
 */
router.get('/types/:id', typesController.getTypeById);



/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Types]
 *     summary: Update a type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
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
 *         description: Type updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Type not found
 *       '500': 
 *         description: Server error
 */
router.put('/types/:id', typesController.updateType);


/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete a type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       '200':
 *         description: Type deleted 
 *       '404':
 *         description: Type not found
 *       '500':
 *         description: Server error
 */
router.delete('/types/:id', typesController.deleteType);


module.exports = router;