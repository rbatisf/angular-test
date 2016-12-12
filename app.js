(function (){
  'use strict';

  var app = angular.module('myFirstApp', []);

  app.controller("myFirstController", myFirstController);

  myFirstController.$inject = ['$scope'];

  function myFirstController($scope){
    $scope.variable = "name";
    $scope.sayHello = function () {
      return "Hello Angular Vicius";
    };
  }

    app.controller("nameCalculator", nameCalculator);
    nameCalculator.$inject = ['$scope', '$filter'];
    function nameCalculator ($scope, $filter){
      $scope.namePC = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function (){
        var totalNameValue = calculateNumberForString($scope.namePC);
        $scope.totalValue = totalNameValue;
      };
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }

      function calculateNumberForString(str){
        var totalStringValue = 0;
        for(var i = 0; i < str.length; i++){
          totalStringValue += str.charCodeAt(i);
        }
        return totalStringValue;
      }


})();
