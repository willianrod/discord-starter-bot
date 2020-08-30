const Bluebird = require('bluebird');

require('dotenv').config();

global.Promise = Bluebird;
global.Promise.config({
  warnings: false,
});
