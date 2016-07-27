'use strict';

// Articles controller
angular.module('resources').controller('ResourcesController', ['$scope', 'Authentication', 'Media',
    function ($scope, Authentication, Media) {
        $scope.authentication = Authentication;

        //todo implement server properly!!

        $scope.init = function () {
            Media.get().then(function(res){
                $scope.sermonseries = res.data;
            })

            // $scope.sermonseries = [{
            //     title: 'Example 1',
            //     preachers: ['Mike', 'Eric'],
            //     sermons: [],
            //     detail: 'Blah blah blah blah',
            //     book: 'Book 1',
            //     thumbnail: '/osigs.jpeg'
            // }, {
            //
            //     title: 'Example 1',
            //     preachers: ['Mike', 'Eric'],
            //     sermons: [],
            //     detail: 'Blah blah blah blah',
            //     book: 'Book 1',
            //     thumbnail: '/hearinggod.png'
            // }, {
            //
            //     title: 'Example 1',
            //     preachers: ['Mike', 'Eric'],
            //     sermons: [],
            //     detail: 'Blah blah blah blah',
            //     book: 'Book 1',
            //     thumbnail: '/advent.png'
            // }, {
            //
            //     title: 'Example 1',
            //     preachers: ['Mike', 'Eric'],
            //     sermons: [],
            //     detail: 'Blah blah blah blah',
            //     book: 'Book 1',
            //     thumbnail: '/osigs.jpeg'
            // }
            // ];

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
