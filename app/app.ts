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


}