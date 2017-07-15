console.log('JS Sourced');
var myApp = angular.module('myApp', []);

myApp.controller('MyGallery',function($scope){



  $scope.pictures = [
    {
      src:"../img/family.jpg",
      message:"My earliest memory with my brothers and my Dad at a wedding.",
      visible: true
    },
    {
      src:"../img/greatest_pic_bros.jpg",
      message:"The greatest picture taken with all my brothers",
      visible: true
    },
    {
      src:"../img/lost_in_paris.jpg",
      message:"Trip to Europe, getting lost in Paris",
      visible: true
    },
    {
      src:"../img/power_rangers.jpg",
      message:"The White Ranger was my Hero, taken right after we saw the movie.",
      visible: true
    },
    {
      src:"../img/tandem_bike.jpg",
      message:"Riding the tandem bike in China.",
      visible: true
    },
    {
      src:"../img/volleyball_champs.jpg",
      message:"2012 Intramural 4v4 volleyball Champions.",
      visible: true
    }

  ];
  $scope.toggle = function(picture){
      console.log('click');
      picture.visible = !picture.visible;
    };
});//end of controller
