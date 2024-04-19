const express = require('express');
const router = express.Router();
const { validate } = require('../middleware/validation');
const { userValidator } = require('../validators/userValidator');
const userController = require('../controllers/user.controller');

// Save GitHub User Data to Database
router.post('/', userValidator, validate, userController.saveUser);

// Find Mutual Followers
router.get('/mutual-followers', userController.findMutualFollowers);

// Search User Data
router.get('/search', userController.searchUsers);

// Soft Delete User Record
router.delete('/:username', userController.softDeleteUser);

// Update User Fields
router.put('/:username', userController.updateUserFields);

// List Users Sorted by Fields
router.get('/', userController.listUsers);

module.exports = router;
