'use strict';

// Articles controller
angular.module('resources').controller('SermonController', ['$scope', 'Authentication', 'Media', '$stateParams',
    function ($scope, Authentication, Media, $stateParams) {
        $scope.authentication = Authentication;

        /**
         * Scope function to find current sermon data
         */
        $scope.findOne = function () {
            Media.getById($stateParams.mediaId).then(function (res) {
                $scope.sermon = res.data;
                $scope.sermon.verses = [{b: 'Gen', v: '1:1-5'}, {b: 'Psm', v: '36:1-15'}];
                $scope.filterSections = $scope.sermon.verses
                for(var i in $scope.sermon.preachers){
                    $scope.sermon.preachers[i].id = i;
                }
            });
        };

        //todo implemnt properly!!!!

        //
        //$scope.init = function() {
        //    Media.create(data);
        //}

        /**
         * Functions to control search filters
         */
        $scope.affix = false;
        $scope.filterSearch = function (search) {
            $scope.$parent.searchText = search;
        };

        $scope.test = '/modules/resources/client/media/osigs/01_Osigs_Part-01_Mike.mp3';

        /**
         * Scope Function to select a sermon
         */
        $scope.selectSermon = function (sermon) {
            $scope.selectedSermon = {};
            $scope.selectedSermon = sermon;
            $scope.selectedSermon.media = '/modules/resources/client/media/' + sermon.media;
        }


    }
]);
