'use strict';

// Articles controller
angular.module('resources').controller('ResourcesController', ['$scope', 'Authentication', 'Media',
    function ($scope, Authentication, Media) {
        $scope.authentication = Authentication;

        //todo implement server properly!!

        $scope.init = function() {
            Media.get().then(function(res){
                $scope.sermonseries = res.data;
            })
            //Media.create();

        }

        /**
         * Functions to control search filters
         */
        $scope.affix = false;
        $scope.filterSections = ['Ephesians', 'Psalms', '1 Samuel', 'Multiple'];
        $scope.filterSearch = function (search) {
            $scope.$parent.searchText = search;
        };

        /**
         * Scope function to update current sermon series
         */
        $scope.updateSeries = function (series) {

        }


    }
]);
