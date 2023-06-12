const Note = require('../models/Note')

const notes_get = async (req, res) => {
  await Note.find().sort({ createdAt: -1 })
    .then(result => res.json(result))
    .catch(err => res.status(400).json({ message: err.message }))
}

const note_get = async (req, res) => {
  await Note.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(400).json({ message: err.message }))
}

const note_post = async (req, res) => {
  await Note.create(req.body)
    .then(result => res.json(result.id))
    .catch(err => res.status(400).json({ message: err.message }))
}

const note_patch = async (req, res) => {
  await Note.findOneAndUpdate({_id: req.params.id}, { ...req.body })
    .then(result => res.json(result.id))
    .catch(err => res.status(400).json({ message: err.message }))
}

const note_delete = async (req, res) => {
  await Note.findOneAndDelete({_id: req.params.id})
    .then(() => res.json({ message: "The note is deleted." }))
    .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
  notes_get, note_get, note_post, note_patch, note_delete
}