const express = require('express');
const router = express.Router();

const langController = require('../controller/lang.Controller');

/**
 * @swagger
 * tags:
 *   name: Langs
 *   description: Lang management
 */


/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Langs]
 *     summary: Create a new lang
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
 *         description: Lang created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/langs', langController.createLang);


/**
 * @swagger
 * /api/langs:
 *   get: 
 *     tags: [Langs]
 *     summary: Get all langs
 *     responses:
 *       '200':
 *         description: List of langs
 *       '500':
 *         description: Server error
 */
router.get('/langs', langController.getLangs);


/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Langs]
 *     summary: Get a lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       '200': 
 *         description: Lang details
 *       '404':
 *         description: Lang not found
 *       '500':
 *         description: Server error
 */
router.get('/langs/:id', langController.getLangById);


/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Langs]
 *     summary: Update a lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
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
 *         description: Lang updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Lang not found
 *       '500': 
 *         description: Server error
 */
router.put('/langs/:id', langController.updateLang);


/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     tags: [Langs]
 *     summary: Delete a lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       '200':
 *         description: Lang deleted 
 *       '404':
 *         description: Lang not found
 *       '500':
 *         description: Server error
 */
router.delete('/langs/:id', langController.deleteLang);


module.exports = router;