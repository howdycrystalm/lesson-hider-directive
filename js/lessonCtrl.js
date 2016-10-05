angular.module('directivePractice')
  .controller('lessonCtrl', function($scope) {
    
      $scope.name = "Quinny";
      $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
      
      
      
      
      $scope.test = 'Two-way data binding!'; //delete this at when finished
  });