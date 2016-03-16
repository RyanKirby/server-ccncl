'use strict';

// Articles controller
angular.module('core').controller('AboutController', ['$scope', 'Authentication',
    function ($scope, Authentication) {

        $scope.modal=[true,false,false,false];
        $scope.modalActive=['active','','',''];

        $scope.modalView = function(i){
            for(var j in $scope.modal){
                $scope.modal[j] = false;
                $scope.modalActive[j] = '';
            }
            $scope.modal[i] = true;
            $scope.modalActive[i] = 'active';

        }



    }
]);
