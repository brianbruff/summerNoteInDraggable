/// <reference path="..\typings\main.d.ts" />

module test{

    class MainCtrl{
        public name = 'brian';


    }


    var app = angular.module('myApp', ['summernote']);
    app.controller('MainCtrl', MainCtrl);


}