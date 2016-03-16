'use strict';

angular.module('core')
    .directive('header', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {

                angular.element($window).bind('scroll', function () {
                    if (this.pageYOffset >= 3) {
                        scope.header = 'not-top';
                    } else {
                        scope.header = 'top';
                    }
                    scope.$apply();
                });
            }
        };
    });
