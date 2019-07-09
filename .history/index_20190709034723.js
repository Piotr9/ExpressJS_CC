const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./members');

const app = express();

//Init middleware
// app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members',(req, res) => res.json(members));

// Get singe member
app.get('api/members/:id', (req, res) => {
    res.send(req.params.id);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port 5000..`));