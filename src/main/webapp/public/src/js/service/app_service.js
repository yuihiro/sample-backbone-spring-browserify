module.exports = AppService = Marionette.Object.extend({

    loadAppConfig: function() {
        return $.ajax({
            url : "api/sensor/list",
            type : "GET",
            dataType : "JSON"
        });
    },

    loadSensorList: function() {
        return $.ajax({
            url : "api/sensor/list",
            type : "GET",
            dataType : "JSON"
        });
    }
});