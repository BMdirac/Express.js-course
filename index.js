// **************** more on 3 **************
const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
];

app.get('/api/members', (req, res) => {
    res.json(members);
});

// Set static folder (so we can render as many html pages as we want)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 3 **************
// automatically adding page to the server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Set static folder (so we can render as many html pages as we want)
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ****************** 2******************
// Manually adding page to the server

// const express = require('express');
// const path = require('path');

// const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ************* 1 ***********************
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!!</h1>');
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
   
