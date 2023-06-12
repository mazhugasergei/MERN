const express = require('express')
const controller = require('../controllers/notes.controller')

const router = express.Router()

router.get('/', controller.notes_get)
router.get('/:id', controller.note_get)
router.post('/', controller.note_post)
router.patch('/:id', controller.note_patch)
router.delete('/:id', controller.note_delete)

module.exports = router