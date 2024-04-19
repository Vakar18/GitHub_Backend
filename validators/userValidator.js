const { body, query, param } = require('express-validator');

exports.userValidator = [
  param('username')
    .notEmpty().withMessage('Username cannot be empty')
    .isString().withMessage('Username must be a string'),

  query('username')
    .optional()
    .isString().withMessage('Username must be a string'),

  query('location')
    .optional()
    .isString().withMessage('Location must be a string'),

  body('location')
    .optional()
    .isString().withMessage('Location must be a string'),

  body('blog')
    .optional()
    .isString().withMessage('Blog must be a string'),

  body('bio')
    .optional()
    .isString().withMessage('Bio must be a string'),

  body('sortBy')
    .optional()
    .isString().withMessage('SortBy must be a string'),
];
