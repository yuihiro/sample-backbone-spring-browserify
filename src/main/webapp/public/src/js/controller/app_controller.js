module.exports = AppController = Marionette.Object.extend({

    initialize: function() {
        this.vent = app.vent;
        this.reqres = app.reqres;
        this.commands = app.commands;

        this.vent.on("login:success", function(data) {
            console.log("로그인13435");
        });
    }
});