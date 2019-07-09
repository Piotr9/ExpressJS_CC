const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'John P',
        email: 'jp@o2.pl',
        status: 'activ'
    },
    {
        id: 2,
        name: 'Johnny B',
        email: 'jb@o2.pl',
        status: 'activ'
    },
    {
        id: 3,
        name: 'Jean T',
        email: 'jt@o2.pl',
        status: 'inactiv'
    }
];

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));     //without ExpressJS

// });

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members',(req, res) => res.json(members));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port 5000..`));