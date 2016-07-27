'use strict';

// Articles controller
angular.module('resources').controller('SermonController', ['$scope', 'Authentication', 'Media', '$stateParams', '$location',
    function ($scope, Authentication, Media, $stateParams, $location) {
        $scope.authentication = Authentication;

        $location.hash('top');

        /**
         * Scope function to find current sermon data
         */
        $scope.findOne = function () {
            Media.getById($stateParams.mediaId).then(function (res) {
                $scope.sermon = res.data;
                $scope.sermon.verses = [{b: 'Gen', v: '1:1-5'}, {b: 'Psm', v: '36:1-15'}];
                $scope.filterSections = $scope.sermon.verses
                for (var i in $scope.sermon.preachers) {
                    $scope.sermon.preachers[i].id = i;
                }
                for (var j in $scope.sermon.sermons) {
                    var name = $scope.sermon.sermons[j].preacher.name;
                    for (var ji in $scope.sermon.preachers) {
                        if ($scope.sermon.preachers[ji].name === name) {
                            $scope.sermon.sermons[j].preacher.id = $scope.sermon.preachers[ji].id;
                        }
                    }
                }
            });

            // $scope.sermon = {
            //     title: 'Example 1',
            //     preachers: ['Mike', 'Eric'],
            //     sermons: [{
            //         title: 'title 1 asdlj asdl jasldja lsjdasdlkj a',
            //         description:'blah blah blah blah blah',
            //         preacher:{
            //             id:0,
            //             name: 'Eric'
            //         },
            //         media: 'eph/We_Are_Adopted_Eric.mp3'
            //     },
            //         {
            //             title: 'title 1',
            //             description:'blah blah blah blah blah',
            //             preacher:{
            //                 id:0,
            //                 name: 'Eric'
            //             },
            //             media: 'eph/We_Are_Adopted_Eric.mp3'
            //         },
            //         {
            //             title: 'title 1',
            //             description:'blah blah blah blah blah',
            //             preacher:{
            //                 id:1,
            //                 name: 'Mike'
            //             },
            //             media: 'eph/We_Are_Adopted_Eric.mp3'
            //         },
            //         {
            //             title: 'title 1',
            //             description:'blah blah blah blah blah',
            //             preacher:{
            //                 id:1,
            //                 name: 'Mike'
            //             },
            //             media: 'eph/We_Are_Adopted_Eric.mp3'
            //         }
            //
            //     ],
            //     detail: 'Blah blah blah blah',
            //     book: 'Book 1',
            //     thumbnail: '/osigs.jpeg'
            // }

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
