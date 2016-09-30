'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http', '$location',
    function ($scope, Authentication, $http, $location) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        // $location.hash('top');
        $scope.logout = function () {
            $http.get('/api/auth/signout');
        }
    }
]);

