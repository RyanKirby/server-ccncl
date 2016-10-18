'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('resources').factory('Media', ['$http',
    function ($http) {
        return {
            //Function that takes a sermon id and returns the full sermon data
            getById: function (id) {
                return $http.get('/sermon/' + id).success(function (res) {
                    return res;
                });
            },
            //created a new sermon
            create: function (name, detail) {
                return $http.post('/createmedia', {title: name, detail: detail})
                    .success(function (res) {
                        console.log(res);
                        return res;
                    })
                    .error(function (res) {
                        console.log('error')
                    });

            },

            get: function () {
                return $http.get('/getsermonseries')
                    .success(function (res) {
                        console.log(res);
                        return res;
                    })

            },

            update: function (sermonSeries) {
                console.log(sermonSeries);
                return $http.post('/updatesermonseries', sermonSeries)
                    .success(function (res) {
                        return res;
                    })
                    .error(function (err) {
                        return err;
                    })
            }
        }
    }
]);

//
//var text = [{
//    "book": ["Ephesians"],
//    "detail": "Some description.... Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blahBlah blah blah blah blah blah blahBlah blah blah blah blah blah blah",
//    "thumbnail": "ephesians.png",
//    "title": "We Are ...",
//    "preachers": ['Micheal Duff, Eric Duong, Mark Henderson, Joel Marsden'],
//    "sermons": [
//        {
//            title: 'Sermon 1',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '01_Osigs_Part-01_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 2',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '02_Osigs_Part-02_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 3',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '03_Osigs_Part-03_Mark.pm3'
//
//        }
//    ]
//}, {
//    "book": ["Multiple"],
//    "detail": "Some description.... Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blahBlah blah blah blah blah blah blahBlah blah blah blah blah blah blah",
//    "thumbnail": "manwoman.png",
//    "title": "Man/Woman",
//    "preachers": ['Micheal Duff, Eric Duong, Mark Henderson, Joel Marsden'],
//    "sermons": [
//        {
//            title: 'Sermon 1',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '01_Osigs_Part-01_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 2',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '02_Osigs_Part-02_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 3',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '03_Osigs_Part-03_Mark.pm3'
//
//        }
//    ]
//}, {
//    "book": ["Psalms"],
//    "detail": "Some description.... Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blahBlah blah blah blah blah blah blahBlah blah blah blah blah blah blah",
//    "thumbnail": "songsofsummer.png",
//    "title": "Song of Summer",
//    "preachers": ['Micheal Duff, Eric Duong, Mark Henderson, Joel Marsden'],
//    "sermons": [
//        {
//            title: 'Sermon 1',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '01_Osigs_Part-01_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 2',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '02_Osigs_Part-02_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 3',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '03_Osigs_Part-03_Mark.pm3'
//
//        }
//    ]
//}, {
//    "book": ["1 Samuel"],
//    "detail": "Some description....",
//    "thumbnail": "hearinggod.png",
//    "title": "Hearing God",
//    "preachers": ['Micheal Duff, Eric Duong, Mark Henderson, Joel Marsden'],
//    "sermons": [
//        {
//            title: 'Sermon 1',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '01_Osigs_Part-01_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 2',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '02_Osigs_Part-02_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 3',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '03_Osigs_Part-03_Mark.pm3'
//
//        }
//    ]
//}, {
//    "book": ["Multiple"],
//    "detail": "Some description....",
//    "thumbnail": "advent.png",
//    "title": "Our Story in Gods Story",
//    "preachers": ['Micheal Duff, Eric Duong, Mark Henderson, Joel Marsden'],
//    "sermons": [
//        {
//            title: 'Sermon 1',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '01_Osigs_Part-01_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 2',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '02_Osigs_Part-02_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 3',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '03_Osigs_Part-03_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 4',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '04_Osigs_Part-04_Eric.pm3'
//
//        },
//        {
//            title: 'Sermon 5',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '05_Osigs_Part-05_Joel.pm3'
//
//        },
//        {
//            title: 'Sermon 6',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '06_Osigs_Part-06_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 8',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '08_Osigs_Part-08_Mark.pm3'
//
//        },
//        {
//            title: 'Sermon 10',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '10_Osigs_Part-10_Eric.pm3'
//
//        },
//        {
//            title: 'Sermon 11',
//            description: 'blah blah blah blah',
//            preacher: 'Micheal Duff',
//            media: '11_Osigs_Part-11_Eric.pm3'
//
//        },
//        {
//            title: 'Sermon 12',
//            description: '',
//            preacher: 'Micheal Duff',
//            media: '12_Osigs_Part-12_Mike.pm3'
//
//        },
//        {
//            title: 'Sermon 13',
//            description: '',
//            preacher: 'Micheal Duff',
//            media: '13_Osigs_Part-13_Mike.pm3'
//        }
//    ]
//}]
