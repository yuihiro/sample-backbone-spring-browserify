var Router = require("./router.js");
var AppService = require("./service/app_service.js");
var AppController = require("./controller/app_controller.js");
var LayoutView = require("./view/layout_view.js");

module.exports = App =  Marionette.Application.extend({

    initialize: function () {
        global.app = this;

        this.app_info = {};
        this.login_info = {};

        this.service = new AppService();
        this.controller = new AppController();
        this.layout = new LayoutView();
        this.router = new Router();

        this.layout.render();
        this.loadAppConfig();
    },

    loadAppConfig : function() {
        var me = this;
        var promise = this.service.loadAppConfig();
        promise.then(
            function (data) {
                app.vent.trigger("login:success", data);
            },
            function (data) {
                console.log(data);
            }
        )
    }
});


