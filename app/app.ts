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




    //jQuery crap

    declare var $ : any;

    var $widget = $('#widget');
    $widget.draggable();
    $widget.resizable();


    $widget.on('resize', function(e){
        var wcaHeight = $('.widgetContentArea').height();
        var noteTbHeight = $('.note-toolbar').height();
        var diff = wcaHeight-noteTbHeight - 20; // 20 padding

        $('div.note-editable').height(diff);
    });

    //end jQuery crap


}