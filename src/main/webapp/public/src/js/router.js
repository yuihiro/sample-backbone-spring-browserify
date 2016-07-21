module.exports = Router = Marionette.AppRouter.extend({

    initialize: function () {
        console.log("라우터");
        Backbone.history.start();
    },

    routes: {
        '#': 'home',
        "sensor": "sensor"
    },

    home: function() {
        app.layout.home();
    },

    sensor: function () {
        app.layout.sensor();
        //app.router.navigate("ap");
    },

    ap: function () {
        app.layout.ap();
        //app.router.navigate("ap");
    }
});