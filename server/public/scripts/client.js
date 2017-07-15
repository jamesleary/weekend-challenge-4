console.log('JS Sourced');
var myApp = angular.module('myApp', []);

myApp.controller('MyGallery',function($scope){



$scope.pictures = [
  {src:"../img/family.jpg",},
  {src:"../img/greatest_pic_bros.jpg"},
  {src:"../img/lost_in_paris.jpg"},
  {src:"../img/power_rangers.jpg"},
  {src:"../img/tandem_bike.jpg"},
  {src:"../img/volleyball_champs.jpg"}

];

});//end of controller
