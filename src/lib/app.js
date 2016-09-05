var Emitter = require('events').EventEmitter;
var util = require('util');
var path = require('path');
var fs = require('fs');
var View = require('./view');

var App = function() {

}

util.inherits(App, Emitter);
module.exports = new App();
