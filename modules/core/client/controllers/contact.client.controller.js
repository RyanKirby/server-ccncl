'use strict';

angular.module('core')
    .controller('ContactController', ['$scope', 'Authentication', 'uiGmapGoogleMapApi','$location',
        function ($scope, Authentication, uiGmapGoogleMapApi,$location) {
            // This provides Authentication context.
            $scope.authentication = Authentication;

            // $location.hash('top');

            $scope.map = {center: {latitude: 54.973853, longitude: -1.609063}, zoom: 15, };
            $scope.options = {
                scrollwheel: false,
                // Disables the default Google Maps UI components
                disableDefaultUI: false,
                draggable: true,


            }
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: 54.973853,
                    longitude: -1.609063
                }
            };

        }
    ]);
