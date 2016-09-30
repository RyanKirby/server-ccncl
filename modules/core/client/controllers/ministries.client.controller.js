'use strict';

// Articles controller
angular.module('core').controller('MinController', ['$scope', 'Authentication','$location',
    function ($scope, Authentication,$location) {
        $scope.authentication = Authentication;

        // $location.hash('top');
        //Dummy data...
        $scope.ministries = [
            {
                name: 'Mens Minstry',
                pic: 'eric.jpg',
                details: 'daslkdja ljdaslkd aksdha lsdalksdjaoisuoiusdifu lsidfklsd fds flksdhjfjsdhfksu dfsdjfjsdf ks dhfoewus ndfsdfliejfl wefli uslkdfh jshdfskdhf uwhfskjdhf skjdfweuhfsdhfks',
                vision:'BWhahahahahahahahah'
            }
        ];

        /**
         * Function that takes a specific ministry and updates the popup modal information
         * @param min (ministry details)
         */
        $scope.selectMin = function(min){
            $scope.selectedMin = min;
        }

        /**
         * Functions to control search filters
         */
        $scope.affix = false;
        $scope.filterSections = [''];
        $scope.filterSearch = function (search) {
            $scope.$parent.searchText = search;
        };

    }
]);
