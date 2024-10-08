const express = require('express');
const notesRouter = require('./routes/notes');

const app = express();
app.use(express.json());

app.use('/notes', async () => await notesRouter);

if (!(notesRouter instanceof Promise) && typeof notesRouter === 'undefined') {
  throw new Error('Notes router is not defined');
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});