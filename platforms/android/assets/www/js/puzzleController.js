var puzzleApp = angular.module('puzzleApp', []);

puzzleApp.controller('puzzleCtrl', function ($scope) {
  $scope.puzzle = {
	   	"_id":1,
		"Question":"Find the missing number in sequence 1,2,_4,5",
		"Options":["3","4","5","6"],
		"Answer":"3",
	};
});