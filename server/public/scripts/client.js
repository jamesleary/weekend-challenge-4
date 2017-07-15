console.log('JS Sourced');
var myApp = angular.module('myApp', []);
//Controller name MyGallery
myApp.controller('MyGallery',function($scope){
  //To see array, see data.js
  $scope.pictures = pictureArray;
//toggleImage to hide image to see description of photo,
//also used to add number of views of photo.
  $scope.toggleImage = function(picture){
      console.log('click');

      picture.visible = !picture.visible;
      if (!picture.visible) {
        picture.views += 1;
      }
    };
    //Show comments function creates a toggle to see any comments
    // made about the photo
    $scope.showComments = function(picture){
        console.log('Show Comment click');
        picture.commentVisible = !picture.commentVisible;
      };
      //like function keeps track number of likes photo receive
    $scope.like = function (image){
      console.log('like click');
      image.myLikes += 1;
    };
    // addComment function adds ability to make a comment under a certain photo
    $scope.addComment = function (image, message){
      console.log('Comment Click');
      console.log(message);
      image.comments.push(message);
    };
});//end of controller
