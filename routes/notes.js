const express = require('express');
const { getNotes, createNoteController, getNoteController, updateNoteController, deleteNoteController } = require('./controllers/notes');

const notesRouter = express.Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', createNoteController);
notesRouter.get('/:id', getNoteController);
notesRouter.put('/:id', updateNoteController);
notesRouter.delete('/:id', deleteNoteController);

module.exports = { notesRouter };