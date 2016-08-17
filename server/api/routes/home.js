var controller = require(__base + 'api/controllers/home');

module.exports = [{
    path: '/api/stat',
    httpMethod: 'GET',
    middleware: [controller.test],
}];
