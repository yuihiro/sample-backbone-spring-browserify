var MainRegion = require("./main_region.js");
var ApView = require("./ap_view.js");
var SensorView = require("./sensor_view.js");

module.exports = LayoutView =  Marionette.LayoutView.extend({

    el: '#app_container',

    template: false,

    regions: {
        menu: '#menu_container',
        status: '#status_container',
        main: '#main_container'
        /*
        main: {
            selector: '#main_container',
            regionClass: MainRegion
        }
        */
    },
    
    initialize: function() {
        console.log("레이아웃");
        this.popup_lst = [];
    },

    home: function() {
        alert("홈");
    },

    sensor: function() {
        this.getRegion("main").show(new SensorView());
    },

    ap: function() {
        this.getRegion("main").show(new ApView());
    }

});