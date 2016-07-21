var SensorList = require("./sensor_list.js");

module.exports = SensorView = Marionette.ItemView.extend({

    template: require('../../template/sensor_view.hbs'),
    name: "sensor_view",
    ui: {},

    initialize: function () {
        this.isData = false;
        this.model = {};
        console.log("initialize");
    },

    render: function () {
        console.log("render");
        var html = this.template();
        this.$el.html(html);

        this.loadData();
    },

    loadData: function () {
        console.log("loadData");
        var me = this;
        var promise = app.service.loadSensorList();
        promise.then(
            function (data) {
                console.log("완료1");
                me.isData = true;
                me.model = data;
                var table = me.createGrid(data);
            },
            function (data) {
            }
        )
    },

    createGrid: function(data) {
        console.log("완료22");
        console.log(data);
        var child = new SensorList({items:data});
        $('#sensor_table').append(child.render().el);
    }
});