console.log('JS Sourced');
var myApp = angular.module('myApp', []);

myApp.controller('MyGallery',function(){
var gallery = this;
console.log(this);
});//end of controller
