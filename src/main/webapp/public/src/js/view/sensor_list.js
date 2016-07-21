module.exports = SensorList = Marionette.ItemView.extend({

    template : require('../../template/sensor_list.hbs'),
    ui: {},
    events: {
        "click a": "clickView"
    },

    initialize: function (data) {
        console.log("차일드 init");
        this.data = data;
    },

    render: function () {
        console.log("차일드 render");
        console.log(this.data);
        var html = this.template(this.data);
        this.$el.html(html);
        return this;
    },

    clickView: function (event) {
        event.preventDefault();
        console.log($(event.target).attr("href"));
    }
});