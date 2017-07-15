console.log('JS Sourced');
var myApp = angular.module('myApp', []);

myApp.controller('MyGallery',function($scope){

  $scope.pictures = [
    {
      src:"../img/family.jpg",
      message:"My earliest memory with my brothers and my Dad at a wedding.",
      visible: true,
      myLikes:  0,
      views: 1,
      comments: [],
      commentVisible: true
    },
    {
      src:"../img/greatest_pic_bros.jpg",
      message:"The greatest picture taken with all my brothers",
      visible: true,
      myLikes:  0,
      views: 1,
      comments: []
    },
    {
      src:"../img/lost_in_paris.jpg",
      message:"Trip to Europe, getting lost in Paris",
      visible: true,
      myLikes:  0,
      views: 1,
      comments: []
    },
    {
      src:"../img/power_rangers.jpg",
      message:"The White Ranger was my Hero, taken right after we saw the movie.",
      visible: true,
      myLikes:  0,
      views: 1,
      comments: []
    },
    {
      src:"../img/tandem_bike.jpg",
      message:"Riding the tandem bike in China.",
      visible: true,
      myLikes:  0 ,
      views: 1,
      comments: []
    },
    {
      src:"../img/volleyball_champs.jpg",
      message:"2012 Intramural 4v4 volleyball Champions.",
      visible: true,
      myLikes:  0,
      views: 1,
      comments: []
    }

  ];
  $scope.toggleImage = function(picture){
      console.log('click');

      picture.visible = !picture.visible;
      if (!picture.visible) {
        picture.views += 1;
      }
    };
    $scope.showComments = function(picture){
        console.log('Show Comment click');

        picture.commentVisible = !picture.commentVisible;

      };
    $scope.like = function (image){
      console.log('like click');
      image.myLikes += 1;
    };

    $scope.addComment = function (image, message){
      console.log('Comment Click');
      console.log(message);

      image.comments.push(message);

    };

});//end of controller
