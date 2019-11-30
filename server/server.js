const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const tasks = require('./routes/todo.router');

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/tasks', tasks);

// Serve back static files by default
app.use(express.static('server/public'));

// Start listening for requests on a specific port
app.listen(PORT, () => {
        console.log('listening on port', PORT);
});
