const multiparty = require('connect-multiparty');
const path = require('path');

// Use connect-multiparty middleware
const multipartyMiddleware = multiparty({
    uploadDir: path.resolve(__dirname, '../public'), // Adjust the path as needed
});

module.exports = multipartyMiddleware;

// khudi ko kar buland itna  react js node js se puchy 
// tum update khy nhi kar rhi, wrna mei chat gpt se puch lou gi