'use strict';

// Articles controller
angular.module('core').controller('LeadersController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        $scope.authentication = Authentication;

        $scope.leaders = [
            {
                firstName: 'Micheal',
                secondName: 'Duff',
                ministries: ['Pastor'],
                gc: 'Jesmond',
                pic: 'mike.jpg',
                details: 'Michael serves as the lead pastor at Cornerstone. He is married to Esolé and they have three boys! As a family they moved from Johannesburg, South Africa, to Newcastle, UK, in 2012.'
            }, {
                firstName: 'Eric',
                secondName: 'Duong',
                ministries: ['Pastor'],
                gc: 'Heaton',
                pic: 'eric.jpg',
                details: 'Eric is one of the church pastors at Cornerstone. He is married to Claire. Eric serves on the preaching team and is responsible for the teaching and training of the church interns. Eric and Claire are currently working towards planting a church into Manchester, with the full support of Cornerstone Church Newcastle.'
            },
            {
                firstName: 'Joel',
                secondName: 'Marsden',
                ministries: ['Pastor'],
                gc: 'Fenham',
                pic: 'joel.jpg',
                details: 'Joel has served as a church pastor at Cornerstone since 2011. He is married to Lynette and they have 4 kids. He heads up the musical worship team at Cornerstone and works as a full time GP in Tyneside.'
            }
            /*{
                firstName: 'Esole',
                secondName: 'Duff',
                ministries: ['Kids', 'GC Leader'],
                gc: 'Jesmond',
                pic: 'ess.jpg',
                details: 'Blurb coming soon...'
            },
            {
                firstName: 'Lynette',
                secondName: 'Marsden',
                ministries: ['GC Leader'],
                gc: 'Fenham',
                pic: 'lynette.jpg',
                details: 'Blurb coming soon...'
            },
            {
                firstName: 'Claire',
                secondName: 'Duong',
                ministries: ['Ladies Ministry','GC Leader'],
                gc: 'Heaton',
                pic: 'claire.jpg',
                details: 'Blurb coming soon...'
            },{
                firstName: 'Mark',
                secondName: 'Henderson',
                ministries: ['GC Leader', 'Welcome'],
                gc: 'Gateshead',
                pic: 'mark.jpg',
                details: 'Blurb to be added soon... . Mark is also involved in the Teaching Team and preaches occasionally at Church.'
            },
            {
                firstName: 'Nicole',
                secondName: 'Henderson',
                ministries: ['GC Leader', 'Welcome'],
                gc: 'Gateshead',
                pic: 'nicole.jpg',
                details: 'Blurb to be added soon...'
            },{
                firstName: 'Dave',
                secondName: 'Parr',
                ministries: ['Youth'],
                gc: 'Kenton',
                pic: 'dave.jpg',
                details: 'Blurb to be added soon...'
            },{
                firstName: 'Jasmine',
                secondName: 'Parr',
                ministries: ['Youth'],
                gc: 'Kenton',
                pic: 'jazz.jpg',
                details: 'Blurb to be added soon...'
            }
            ,{
                firstName: 'Ryan',
                secondName: 'Kirby',
                ministries: ['Mens Ministry', 'GC Leader'],
                gc: 'Kenton',
                pic: 'ryan.jpg',
                details: 'I have currently been at Cornerstone for about tree and a half years. Since then I have graduated from university, got married to my lovely wife Sarah and have just added to our family, our first born son Ethan. Currently I work as a software developer creating websites and mobile apps for Newcastle University.'
            }, {
                firstName: 'Sarah',
                secondName: 'Kirby',
                ministries: ['GC Leader'],
                gc: 'Kenton',
                pic: 'sarah.jpg',
                details: 'My name is Sarah & I am married to Ryan Kirby. I moved to Newcastle 11 years ago from Northern Ireland to study at Northumbria University. I' + "'"+ 've been apart of this church community for the last 10 years. I work as a part time Paediatric Occupational Therapist within the west of the city. In my spare time I enjoy running & baking yummy treats.'
            }, {
                firstName: 'Pete',
                secondName: 'Mills',
                ministries: ['Mens Ministry', 'Intern'],
                gc: 'Heaton',
                pic: 'pete.jpg',
                details: 'Hi, my name is Pete and I'+"'"+'m one of the interns at Cornerstone Church NCL, as well as being a part-time Support Worker in North Tyneside. I graduated last year from Newcastle University with a Music degree and I love being involved in our worship team!.'
            }, {
                firstName: 'Shelley',
                secondName: 'Barclay',
                ministries: ['Ladies Ministry', 'Intern'],
                gc: 'Heaton',
                pic: 'shelley.jpg',
                details: 'I' +"'"+'m Shelley. I am one of the interns at Cornerstone, as well as a waitress part time. I'+"'"+'m originally from Northern Ireland and moved to Newcastle to study in 2012. My life is mainly spent working with the students & women of our church and doing a host of background jobs, it is all great fun! If you don'+'"'+'t know me say hi!'
            }*/
        ];

        $scope.selectPerson = function(person){
            console.log('asdasd');
            console.log(person);
            $scope.selectedPerson = person;
        }

        /**
         * Functions to control search filters
         */
        $scope.affix = false;
        $scope.filterSections = ['Elder', 'Mens Ministry', 'Ladies Ministry', 'Kids', 'Youth', 'Intern', 'GC Leader'];
        $scope.filterSearch = function (search) {
            $scope.$parent.searchText = search;
        };

    }
]);
