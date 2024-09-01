const { db } = require('./db/db');

let initialized = false;

function initService() {
  if (!initialized) {
    initialized = true;
  }
}

initService();

function getAllNotes() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM notes', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function createNote(title, content) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO notes (title, content) VALUES (?, ?)`, title, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, title, content });
      }
    });
  });
}

function getNote(id) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM notes WHERE id = ?`, id, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function updateNote(id, title, content) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE notes SET title = ?, content = ? WHERE id = ?`, title, content, id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id, title, content });
      }
    });
  });
}

function deleteNote(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM notes WHERE id = ?`, id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { getAllNotes, createNote, getNote, updateNote, deleteNote };