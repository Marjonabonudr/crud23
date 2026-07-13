const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin.Controller');


/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin management
 */



/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admins]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/admins', adminController.createAdmin);



/**
 * @swagger
 * /api/admins:
 *   get: 
 *     tags: [Admins]
 *     summary: Get all admins
 *     responses:
 *       '200':
 *         description: List of admins
 *       '500':
 *         description: Server error
 */
router.get('/admins', adminController.getAdmins);


/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admins]
 *     summary: Get a admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       '200': 
 *         description: Admin details
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */
router.get('/admins/:id', adminController.getAdminById);



/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admins]
 *     summary: Update a admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       '200': 
 *         description: Admin updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Admin not found
 *       '500': 
 *         description: Server error
 */
router.put('/admins/:id', adminController.updateAdmin);



/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     tags: [Admins]
 *     summary: Delete a admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       '200':
 *         description: Admin deleted 
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */
router.delete('/admins/:id', adminController.deleteAdmin);



/**
 * @swagger
 * /api/admins/search:
 *   get:
 *     tags: [Admins]
 *     summary: Search admins by name or login
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for admins
 *     responses:
 *       '200':
 *         description: List of admins matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/admins/search', adminController.searchAdmins);


module.exports = router;