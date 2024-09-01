const express = require('express');
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('./controllers/notes');

const notesRouter = express.Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', createNote);
notesRouter.get('/:id', getNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

module.exports = notesRouter;