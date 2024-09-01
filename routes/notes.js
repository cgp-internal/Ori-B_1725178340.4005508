const express = require('express');
const notesController = require('./controllers/notes');

const notesRouter = express.Router();

notesRouter.get('/', notesController.getNotes);
notesRouter.post('/', notesController.createNote);
notesRouter.get('/:id', notesController.getNote);
notesRouter.put('/:id', notesController.updateNote);
notesRouter.delete('/:id', notesController.deleteNote);

module.exports = notesRouter;