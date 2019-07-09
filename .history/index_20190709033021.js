const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${res.originalUrl}`);
    next();
};

//Init middleware
app.use(logger);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));     //without ExpressJS (get only 1 file)

// });

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members',(req, res) => res.json(members));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port 5000..`));