Notes Application
================

Welcome to the Notes application!

Getting Started
--------------

### Install dependencies

`npm install`

### Run the application

`node app.js`

### Access the application

Open a web browser and navigate to `http://localhost:3000`

Application Overview
-------------------

The Notes application provides a simple note-taking system with CRUD (Create, Read, Update, Delete) operations.

The application is built using Node.js, Express.js, and SQLite. It consists of the following components:

* `app.js`: The main entry point for the application, responsible for setting up the Express server and defining routes.
* `routes/notes.js`: Defines routes for CRUD operations on notes.
* `controllers/notes.js`: Contains logic for handling CRUD operations on notes.
* `services/notesService.js`: Contains functions for interacting with the SQLite database.
* `db/db.js`: Sets up the SQLite database connection.
* `models/Note.js`: Defines the structure of a Note.
* `db/notes.db`: The SQLite database file.

License
-------

This project is licensed under the MIT License.

Copyright 2023 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.