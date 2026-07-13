const express = require('express');
const router = express.Router();

const human_categoryController = require('../controller/human_category.Controller');

/**
 * @swagger
 * tags:
 *   name: Human Categories
 *   description: Human Category management
 */



/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     tags: [Human Categories]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Human Category created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */ 
router.post('/human-categories', human_categoryController.createHumanCategory);



/**
 * @swagger
 * /api/human-categories:
 *   get: 
 *     tags: [Human Categories]
 *     summary: Get all human categories
 *     responses:
 *       '200':
 *         description: List of human categories
 *       '500':
 *         description: Server error
 */
router.get('/human-categories', human_categoryController.getHumanCategories);



/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     tags: [Human Categories]
 *     summary: Get a human category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human Category ID
 *     responses:
 *       '200': 
 *         description: Human Category details
 *       '404':
 *         description: Human Category not found
 *       '500':
 *         description: Server error
 */
router.get('/human-categories/:id', human_categoryController.getHumanCategoryById);



/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     tags: [Human Categories]
 *     summary: Update a human category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Human Category updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Human Category not found
 *       '500': 
 *         description: Server error
 */
router.put('/human-categories/:id', human_categoryController.updateHumanCategory);


/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     tags: [Human Categories]
 *     summary: Delete a human category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Human Category ID
 *     responses:
 *       '200':
 *         description: Human Category deleted
 *       '404':
 *         description: Human Category not found
 *       '500':
 *         description: Server error
 */
router.delete('/human-categories/:id', human_categoryController.deleteHumanCategory);



/**
 * @swagger
 * /api/human-categories/search:
 *   get:
 *     tags: [Human Categories]
 *     summary: Search human categories by name or description
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for human categories
 *     responses:
 *       '200':
 *         description: List of human categories matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/human-categories/search', human_categoryController.searchHumanCategories);


module.exports = router;