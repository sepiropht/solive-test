var controller = require(__base + 'api/controllers/home');

module.exports = [{
    path: '/api/test',
    httpMethod: 'GET',
    middleware: [controller.test],
}];
