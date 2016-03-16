'use strict';

// Setting up route
angular.module('resources').config(['$stateProvider',
    function ($stateProvider) {
        // Articles state routing
        $stateProvider

            .state('resource', {
                abstract: true,
                url: '/sermonseries',
                template: '<ui-view/>'
            })
            .state('resource.list', {
                url: '',
                templateUrl: 'modules/resources/client/views/sermon_series_overview.client.view.html'
            })
            .state('resource.edit', {
                url: '/edit',
                templateUrl: 'modules/resources/client/views/sermons_edit.client.view.html'
            })
            .state('resource.view', {
                url: '/:mediaId',
                templateUrl: 'modules/resources/client/views/sermon.client.view.html'
            })
    }
]);
