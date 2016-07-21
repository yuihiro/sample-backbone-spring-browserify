module.exports = ApView = Marionette.ItemView.extend({

    //template : require('../../template/sensor_list.hbs'),

    name: "ap_view",
    ui: {},
    events: {
        "click .test_btn": "clickView"
    },

    initialize: function () {

    },

    render: function () {
        console.log("랜더");
        var html = this.template({items:app.app_info.items});
        this.$el.html(html);
    },

    clickView: function (event) {
        console.log("클릭");
    }
});