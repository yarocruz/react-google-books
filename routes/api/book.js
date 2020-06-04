const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/api/books').get(bookController.findAll);
router.route('/:id').post(bookController.create);

module.exports = router;