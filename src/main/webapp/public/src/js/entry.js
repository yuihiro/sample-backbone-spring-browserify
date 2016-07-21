global.jQuery = global.$ = require("jquery");
global._ = require("underscore");
global.Backbone = require("backbone");
global.Marionette = require("backbone.marionette");

require("pace");
global.$.DataTable = require("datatables");
//global.$.dynatable = require("dynatable");
//global.$.jsGrid = require("jsGrid");
var Handlebars = require("hbsfy/runtime");
require("swag");
require("./app.js");
//var gsap = require('gsap');
//global.TweenMax = gsap.TweenMax;

$(function () {
    console.log("ready");
    paceOptions = {
        restartOnRequestAfter: true,
        ajax: true,
        document: false,
        eventLag: false,
        elements: false
    };

    Swag.registerHelpers(Handlebars);
    Swag.Config.partialsPath = './src/partial/'
    new App();
});

