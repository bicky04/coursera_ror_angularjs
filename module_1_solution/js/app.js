(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController',LunchCheckerController);


 
LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController ($scope) {
  $scope.lunchItems = "";
  $scope.fontColor = "Black";

  $scope.checkLunch = function () {
    var message = $scope.lunchItems;
    var color = $scope.fontColor;
    var list= message.split(',');
    var count=countList(list);
    if (message == "") {
      message = "Please enter data first";
    } else if (count < 4) {
      message = "Enjoy!";
      color ='red';
    } else {
      message = "Too Much!";
      color='red';
    } 
    
    $scope.fontColor = color;
    $scope.message = message;
  };

  function countList(array){
    var counter=0;
    for (var prop in array) {
      console.log(array[prop])
      if (array[prop]!==""){
        counter=counter+1;
      }
    }
    return counter;
  }

};

//---IIFE
})();
