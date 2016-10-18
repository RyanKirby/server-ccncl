'use strict';

// Articles controller
angular.module('resources').controller('EditResourcesController', ['$scope', 'Authentication', 'Media', '$timeout',
    function ($scope, Authentication, Media, $timeout) {
        $scope.authentication = Authentication;

        $scope.init = function () {
            Media.get().then(function (res) {
                $scope.sermonseries = res.data;
                $scope.selectedSermonSeries = res.data[0];
            })
        }

        $scope.selectSermonSeries = function (sermonseries, i) {
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
            Media.update($scope.selectedSermonSeries)
                .then(function (res) {
                    if (res.data.msg === 'ok') {
                        $scope.update = true;
                        $timeout(function () {
                            $scope.update = false;
                        }, 5000);
                    }
                });
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

        $scope.updatePosition = function (sermon) {
            Media.update(sermon)
                .then(function(res){
                    if (res.data.msg === 'ok') {
                        $scope.posUpdate = true;
                        $timeout(function () {
                            $scope.posUpdate = false;
                        }, 3000);
                    }
                });
        }


        $scope.addSermonSeries = function (name, detail) {
            Media.create(name, detail)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.msg === 'ok') {
                        $scope.sermonseries.push(res.data.data);
                    }
                })
        }


    }
]);
