// **************** 14 (Rendering template using template engine) (view folder is also created) **************
// template engine use here is: express-handlebars
const express = require('express');
const { get } = require('http');
const exp = require('express-handlebars');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// to initialize middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exp.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());   
app.use(express.urlencoded({ extended: false }));

// Homepage Route (this is will render the content in views folder which is the index.handlebars)
// This also overide 'static folder' below
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    });
})

// Set static folder (so we can render as many html pages as we want)
// it also loads any type of file (i.e html, css etc) automatically
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 13 (to delete a Member ) **************
// this is achieved using delete() method request
// check the member.js in routes/api folder to see code update
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger');

// const app = express();

// // to initialize middleware
// // app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// // Members API Routes
// app.use('/api/members', require('./routes/api/members'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 12 (to update a Member ) **************
// this is achieved using put() method request
// check the member.js in routes/api folder to see code update
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger');

// const app = express();

// // to initialize middleware
// // app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// // Members API Routes
// app.use('/api/members', require('./routes/api/members'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 11 (to create a Member ) **************
// this is achieved using post() method
// check the member.js in routes/api folder to see code update
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger');

// const app = express();

// // to initialize middleware
// // app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// // Members API Routes
// app.use('/api/members', require('./routes/api/members'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 10 ( routes folder is created) **************
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger');

// const app = express();

// // to initialize middleware
// // app.use(logger);


// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// // Members API Routes
// app.use('/api/members', require('./routes/api/members'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 9 ( to display an error for message for invalid member id) **************
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger')
// const members = require('./Members')

// const app = express();

// // to initialize middleware
// // app.use(logger);

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Get Single Member
// app.get('/api/members/:id', (req, res) => {
//     // 'some()' runs the equality condition based on true or false. its a js method
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id))); 
//     } else {
//         // to give a status of 400 with member with invalid id
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }

// });

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 8 ( to get individual member from our created local api) **************
// this is achieve by id
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger')
// const members = require('./Members')

// const app = express();

// // to initialize middleware
// // app.use(logger);

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Get Single Member
// app.get('/api/members/:id', (req, res) => {
//     res.json(members.filter(member => member.id === parseInt(req.params.id))); 
// })

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 7 ( we put the middleware into a separate folder) **************
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const logger = require('./middleware/logger')
// const members = require('./Members')

// const app = express();


// // to initialize middleware
// app.use(logger);

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 6 (To use moment for date formating) **************
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const moment = require('moment');
// const members = require('./Members')

// const app = express();

// // Creating middleware
// /* 
// so anytime we send a request our content
// will get render in the output terminal
// */
// const logger = (req, res, next) => {
//     // console.log('Hello');
//     // we can have access to certain part of the url with the request object
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
//     // ${req.protocol} gives us http, ${req.get('host')} gives host
//     next();
// }
// // to initialize middleware
// app.use(logger);

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 5 (To create Middleware) **************
// members has been put into a separate file 
// Middleware have access to the request and response body
// const express = require('express');
// const { get } = require('http');
// const path = require('path');
// const members = require('./Members')

// const app = express();

// // Creating middleware
// /* 
// so anytime we send a request our content
// will get render in the output terminal
// */
// const logger = (req, res, next) => {
//     // console.log('Hello');
//     // we can have access to certain part of the url with the request object
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     // ${req.protocol} gives us http, ${req.get('host')} gives host
//     next();
// }
// // to initialize middleware
// app.use(logger);

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

 // **************** 4 (To render json )**************
// const express = require('express');
// const path = require('path');

// const app = express();

// const members = [
//     {
//         id: 1,
//         name: 'John Doe',
//         email: 'john@gmail.com',
//         status: 'active'
//     },
//     {
//         id: 2,
//         name: 'Bob Williams',
//         email: 'bob@gmail.com',
//         status: 'inactive'
//     },
//     {
//         id: 3,
//         name: 'Shannon Jackson',
//         email: 'shannon@gmail.com',
//         status: 'active'
//     }
// ];

// // Gets All Members
// // /api/members is a route we created
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Set static folder (so we can render as many html pages as we want)
// // it also loads any type of file (i.e html, css etc) automatically
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// **************** 3 (automatically adding page to the server) **************
// const express = require('express');
// const path = require('path');

// const app = express();

// // Set static folder (so we can render as many html pages as we want)
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ****************** 2 (Manually adding page to the server) *****************
// const express = require('express');
// const path = require('path');

// const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ************* 1 (To render html content) ***********************
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!!</h1>');
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
   
