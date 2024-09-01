const express = require('express');
const { notesRouter } = require('./routes/notes');

const app = express();
app.use(express.json());

app.use('/notes', notesRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});