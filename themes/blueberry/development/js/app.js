var $ = require('jquery');
var bootstrap = require('bootstrap');

var navbarFixer = require('./modules/navbar-fixer');
var smoothScroll = require('./modules/smooth-scroll');

$(document).ready(function(){
  navbarFixer.init(document.querySelector('.js--init-navbar-fixer'));
  smoothScroll.init();
});
