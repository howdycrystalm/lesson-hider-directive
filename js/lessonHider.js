angular.module('directivePractice')
  .directive('lessonHider', function() {
    
    return {
      restrict: 'E',
      templateUrl: './views/lessonHider.html',
      scope: {
        lesson : '='
      },
      
      controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      
      link: function(scope, element, attributes) {
        scope.getSchedule.then(function (response) {
          scope.schedule = response.data;
          
            for (var i = 0; i < scope.schedule.length; i++) {
              if(scope.lesson === scope.schedule[i].lesson) {
                element.css('text-decoration', 'line-through'); //do i need single mustache brackets between my parenthesis?
                return;
              }
            }
        });
      }
    }
    
  })