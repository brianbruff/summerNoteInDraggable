/// <reference path="..\typings\main.d.ts" />
var test;
(function (test) {
    var MainCtrl = (function () {
        function MainCtrl() {
            this.name = 'brian';
        }
        return MainCtrl;
    })();
    var app = angular.module('myApp', ['summernote']);
    app.controller('MainCtrl', MainCtrl);
})(test || (test = {}));
//# sourceMappingURL=app.js.map