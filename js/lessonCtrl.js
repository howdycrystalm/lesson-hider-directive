angular.module('directivePractice')
  .controller('lessonCtrl', function($scope) {
    

      $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
      
      $scope.announceDay = function(lesson, day){
        alert(lesson + ' is active on ' + day + '.');
    };

      
      
      $scope.test = 'Two-way data binding!'; //delete this at when finished
  });