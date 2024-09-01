const { getAllNotes, createNote, getNote, updateNote, deleteNote } = require('../services/notesService');

async function getNotes(req, res) {
  try {
    const notes = await getAllNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve notes' });
  }
}

async function createNoteController(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = await createNote(title, content);
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create note' });
  }
}

async function getNoteController(req, res) {
  try {
    const id = req.params.id;
    const note = await getNote(id);
    if (!note) {
      res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json(note);
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve note' });
  }
}

async function updateNoteController(req, res) {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const updatedNote = await updateNote(id, title, content);
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update note' });
  }
}

async function deleteNoteController(req, res) {
  try {
    const id = req.params.id;
    await deleteNote(id);
    res.status(204).json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete note' });
  }
}

module.exports = { getNotes, createNoteController, getNoteController, updateNoteController, deleteNoteController };