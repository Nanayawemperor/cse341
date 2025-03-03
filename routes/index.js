const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.emmanuelRoute);

routes.get('/emperor', lesson1Controller.emperorRoute);

module.exports = routes;