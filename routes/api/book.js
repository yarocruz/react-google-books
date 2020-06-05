const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/api/books').get(bookController.findAll);
router.route('/:id')
    .get(bookController.findById)
    .post(bookController.create)
    .put(bookController.update)
    .delete(bookController.remove)

module.exports = router;