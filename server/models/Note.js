const { Schema, model } = require('mongoose')

const NoteSchema = new Schema({
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = model('Note', NoteSchema)