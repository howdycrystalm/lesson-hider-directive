angular.module('directivePractice')
  .directive('lessonHider', function() {
    
    return {
      restrict: 'E',
      templateUrl: './views/lessonHider.html',
      // controller: function($scope, lessonService) {},
      scope: {
        lesson : '='
      },
      link: function(scope, element, attributes) {

      }
    }
    
  })