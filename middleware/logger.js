const moment = require('moment');
// Creating middleware
/* 
so anytime we send a request our content
will get render in the output terminal
*/
const logger = (req, res, next) => {
    // console.log('Hello');
    // we can have access to certain part of the url with the request object
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    // ${req.protocol} gives us http, ${req.get('host')} gives host
    next();
}

module.exports = logger;