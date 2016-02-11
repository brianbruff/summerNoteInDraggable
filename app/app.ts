/// <reference path="..\typings\main.d.ts" />

module test{

    class MainCtrl{
        public name = 'brian';
        public height = 300;


        doubleHeight(){
            this.height = 2 * this.height;

        }


    }


    var app = angular.module('myApp', ['summernote']);
    app.controller('MainCtrl', MainCtrl);


    function widgetTest(){
        return {
            templateUrl: 'widget.tmpl.html',
            link : function(scope, element, attrs){
                var widget = element.find('.widgetContent');

                widget.draggable();
                widget.resizable();

                element.on('resize', function(){
                    var wcaHeight = $('.widgetContentArea').height();
                    var noteTbHeight = $('.note-toolbar').height();
                    var diff = wcaHeight-noteTbHeight - 20; // 20 padding

                    $('div.note-editable').height(diff);
                });


            }
        }

    }

    app.directive('widgetTest', [widgetTest]);

    //jQuery crap

    declare var $ : any;







}