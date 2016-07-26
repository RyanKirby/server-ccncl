'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Redirect to 404 when route not found
        $urlRouterProvider.otherwise(function ($injector, $location) {
            $injector.get('$state').transitionTo('not-found', null, {
                location: false
            });
        });

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/core/client/views/home.client.view.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'modules/core/client/views/about/about.client.view.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'modules/core/client/views/contact/contact.client.view.html'
            })
            .state('leaders', {
                url: '/leaders',
                templateUrl: 'modules/core/client/views/about/leaders.client.view.html'
            })
            .state('kids&youth', {
                url: '/kids&youth',
                templateUrl: 'modules/core/client/views/about/kidsandyouth.client.view.html'
            })
            .state('homegroup', {
                url: '/homegroup',
                templateUrl: 'modules/core/client/views/about/gc.client.view.html'
            })
            .state('new', {
                url: '/new',
                templateUrl: 'modules/core/client/views/new/new.client.view.html'
            })
            .state('students', {
                url: '/students',
                templateUrl: 'modules/core/client/views/about/students.client.view.html'
            })
            .state('not-found', {
                url: '/not-found',
                templateUrl: 'modules/core/client/views/404.client.view.html',
                data: {
                    ignoreState: true
                }
            })
            .state('bad-request', {
                url: '/bad-request',
                templateUrl: 'modules/core/client/views/400.client.view.html',
                data: {
                    ignoreState: true
                }
            })
            .state('forbidden', {
                url: '/forbidden',
                templateUrl: 'modules/core/client/views/403.client.view.html',
                data: {
                    ignoreState: true
                }
            });
    }
]);
