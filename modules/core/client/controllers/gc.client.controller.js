'use strict';

// Articles controller
angular.module('core').controller('GcController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        $scope.authentication = Authentication;

        $scope.gcs = [
            {
                name:'Jesmond',
                area:'East',
                leaders:{
                    leaderone:{
                        firstname:'Micheal',
                        secondname:'Duff'
                    },
                    leadertwo:{
                        firstname:'Esole',
                        secondname:'Duff'
                    }
                },
                thumbnail:'jesmond.jpg',
                details:'The Jesmond Gospel Community meets mostly in the home of Mike & Ess on Thursdays 19h30. We love eating food, drinking coffee and studying the scriptures together. Join us!'
            },
            {
                name:'Heaton',
                area:'East',
                leaders:{
                    leaderone:{
                        firstname:'Eric',
                        secondname:'Duong'
                    },
                    leadertwo:{
                        firstname:'Claire',
                        secondname:'Duong'
                    }
                },
                thumbnail:'heaton.jpg',
                details:'Eric and Claire lead the direction of the collective gospel communities, training leaders and helping those currently serving develop in their call to lead a community. In addition, Eric and Claire lead the Heaton Gospel community group. It’s a wonderful and fun-loving community, who are serious about the scriptures and making Jesus known. Heaton Gospel Community is currently brimming with people and will be looking to grow into 2 Gospel Communities in the near future.'
            },
            {
                name:'Gateshead',
                area:'South',
                leaders:{
                    leaderone:{
                        firstname:'Mark',
                        secondname:'Henderson'
                    },
                    leadertwo:{
                        firstname:'Nicole',
                        secondname:'Henderson'
                    }
                },
                thumbnail:'gateshead.jpg',
                details:'Mark and Nicole Henderson lead the Gateshead Gospel Community group every Wednesday evening. Our desire is to unpack the sermon and apply it in our walk with God alongside our friends. We usually have fellowship and food at our Gospel Community evenings.'
            },
            {
                name:'Fenham',
                area:'West',
                leaders:{
                    leaderone:{
                        firstname:'Joel',
                        secondname:'Marsden'
                    },
                    leadertwo:{
                        firstname:'Lynnete',
                        secondname:'Marsden'
                    }
                },
                thumbnail:'fenham.jpg',
                details:'At Fenham GC, we meet in the west end of the city. We mainly consist of couples, a few young families and a few students and seek to involve ourselves in each others' + "'" + ' lives and reaching our friends and neighbours wth the gospel. We aim to meet in Thursday night. We would love to have you along.'
            },
            {
                name:'Kenton',
                area:'North',
                leaders:{
                    leaderone:{
                        firstname:'Ryan',
                        secondname:'Kirby'
                    },
                    leadertwo:{
                        firstname:'Sarah',
                        secondname:'Kirby'
                    }
                },
                thumbnail:'kenton.jpg',
                details:'The Kenton GC focus is taken from Acts 2:42 - 47. As a group we desire to to grow in our relationship with Christ, each other and those who don'+"'"+'t know Christ. Every Thursday at 7pm we meet and share food together. We build community by doing life together, so feel free to pop along and see what we are all about!'
            }
        ];

        $scope.selectGc = function(gc){
            console.log(gc);
            $scope.selectedGc = gc;
        }

        /**
         * Functions to control search filters
         */
        $scope.affix = false;
        $scope.filterSections = ['North', 'East', 'South', 'West'];
        $scope.filterSearch = function (search) {
            $scope.$parent.searchText = search;
        };

    }
]);
