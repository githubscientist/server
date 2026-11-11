// setup the fs for writing the log to the file
const fs = require('fs');

// middleware
const logger = async (request, response, next) => {
    // log the incoming request details
    // console.log('Request received at:', new Date().toISOString());
    // console.log('Request method:', request.method);
    // console.log('Request URL:', request.originalUrl);
    // console.log('Request body:', request.body);
    // console.log('Request params:', request.params);
    // // console.log('Request query:', request.query);
    // console.log('Cookies:', request.cookies);
    // console.log('Request headers:', request.headers);
    // console.log('----------------------------------------');

    // write the log to a file
    const logData = `Request received at: ${new Date().toISOString()}\nRequest method: ${request.method}\nRequest URL: ${request.originalUrl}\nRequest body: ${JSON.stringify(request.body)}\nRequest params: ${JSON.stringify(request.params)}\nCookies: ${JSON.stringify(request.cookies)}\nRequest headers: ${JSON.stringify(request.headers)}\n----------------------------------------\n`;

    // get the current date without time for the log file name
    const currentDate = new Date().toISOString().split('T')[0];

    fs.appendFile('./logs/request_logs_' + currentDate + '.log', logData, (err) => {
        if (err) {
            console.error('Error writing log to file:', err);
            // return an error response if the log writing fails
            return response.status(500).json({ 'message': 'Error in writing log to file...' });
        }
    });

    // decide whether to continue processing the request or not
    next();
}

module.exports = logger;