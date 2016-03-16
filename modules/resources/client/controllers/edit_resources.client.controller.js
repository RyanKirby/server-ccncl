'use strict';

// Articles controller
angular.module('resources').controller('EditResourcesController', ['$scope', 'Authentication', 'Media',
    function ($scope, Authentication, Media) {
        $scope.authentication = Authentication;

        $scope.sermonSelected = []

        $scope.init = function () {
            Media.get().then(function (res) {
                $scope.sermonseries = res.data;
                $scope.selectedSermonSeries = res.data[0];
                for (var i in res.data) {
                    if (i === '0') {
                        $scope.sermonSelected.push('active');
                    } else {
                        $scope.sermonSelected.push('');
                    }
                }
            })
        }

        var currentSermonIndex = 0;

        $scope.selectSermonSeries = function (sermonseries, i) {
            for (var j in $scope.sermonseries) {
                $scope.sermonSelected[j] = '';
            }
            currentSermonIndex = i;
            $scope.sermonSelected[i] = 'active';
            $scope.selectedSermonSeries = sermonseries;
        }

        $scope.addPreacher = function (newPreacher) {
            $scope.selectedSermonSeries.preachers.push({name: newPreacher});
        }

        $scope.removePreacher = function (i) {
            $scope.selectedSermonSeries.preachers.splice(i, 1);
        }

        $scope.updatePreacher = function (preacher, i) {
            //$scope.sermonseries[currentSermonIndex].preachers[i] = preacher;
            $scope.selectedSermonSeries.preachers[i] = preacher;

        }

        $scope.updateSermon = function () {

            console.log($scope.selectedSermonSeries.detail);
            console.log($scope.selectedSermonSeries);
            Media.update($scope.selectedSermonSeries);

        }

        $scope.newSermon = function () {
            var example = {
                title: 'New Sermon',
                preacher: {
                    name: 'Name'
                },
                verses: '',
                description: 'Write a description...',
                media: 'filename'
            }
            $scope.selectedSermonSeries.sermons.push(example);
        }

        $scope.removeSermon = function (i) {
            $scope.selectedSermonSeries.sermons.splice(i, 1);
        }

        $scope.addSermonSeries = function () {

        }


    }
]);
