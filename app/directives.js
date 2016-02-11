/// <reference path="..\typings\main.d.ts" />
var app = angular.module('myApp');
function widgetTest() {
    return {
        templateUrl: 'app/widget.tmpl.html',
        link: function (scope, element, attrs) {
            function setHeight() {
                var wcaHeight = $('.widgetContentArea').height();
                var noteTbHeight = $('.note-toolbar').height();
                var diff = wcaHeight - noteTbHeight - 20; // 20 padding
                diff = diff - 30; // bottom spacing for status bar
                $('div.note-editable').height(diff);
            }
            var widget = element.find('.widget');
            widget.draggable({
                cursor: "move",
                handle: '.header',
                cancel: '.widgetContent'
            });
            widget.resizable();
            element.on('resize', function () {
                setHeight();
            });
            setHeight();
        }
    };
}
app.directive('widgetTest', [widgetTest]);
//# sourceMappingURL=directives.js.map