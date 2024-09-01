const sqlite3 = require('sqlite3').verbose();

let db;

function initDatabase() {
  db = new sqlite3.Database('db/notes.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
}

initDatabase();

module.exports = { db };