console.log('JS Sourced');
var myApp = angular.module('myApp', []);

myApp.controller('MyGallery',function(){
var gallery = this;
console.log(this);

gallery.pictures = [];
gallery.addPictures = function(){

};

});//end of controller
