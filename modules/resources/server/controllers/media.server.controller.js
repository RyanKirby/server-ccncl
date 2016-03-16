'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
    mongoose = require('mongoose'),
    Media = mongoose.model('Media'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a article
 */
exports.create = function (req, res) {
    console.log('create media')

    console.log(req.body);
    ////todo validation check
    var media = new Media(req.body);
    //
    //console.log(media);

    //
    //var test = [{
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
    //            media: 'osigs/01_Osigs_Part-01_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 2',
    //            description: 'blah blah blah blah',
    //            preacher: 'Micheal Duff',
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 3',
    //            description: 'blah blah blah blah',
    //            preacher: 'Micheal Duff',
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
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
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/01_Osigs_Part-01_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 2',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:3,
    //                name:'Mark Henderson'
    //            },
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 3',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:1,
    //                name:'Eric Duong'
    //            },
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
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
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/01_Osigs_Part-01_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 2',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 3',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 4',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:1,
    //                name:'Eric Duong'
    //            },
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 5',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:3,
    //                name:'Mark Henderson'
    //            },
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
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
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/01_Osigs_Part-01_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 2',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 3',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
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
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/01_Osigs_Part-01_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 2',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:3,
    //                name:'Mark Henderson'
    //            },
    //            media: 'osigs/02_Osigs_Part-02_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 3',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:3,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/03_Osigs_Part-03_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 4',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:1,
    //                name:'Eric Duong'
    //            },
    //            media: 'osigs/04_Osigs_Part-04_Eric.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 5',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:2,
    //                name:'Joel Marsden'
    //            },
    //            media: 'osigs/05_Osigs_Part-05_Joel.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 6',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/06_Osigs_Part-06_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 8',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:3,
    //                name:'Mark Henderson'
    //            },
    //            media: 'osigs/08_Osigs_Part-08_Mark.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 10',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:1,
    //                name:'Eric Duong'
    //            },
    //            media: 'osigs/10_Osigs_Part-10_Eric.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 11',
    //            description: 'blah blah blah blah',
    //            preacher: {
    //                id:1,
    //                name:'Eric Duong'
    //            },
    //            media: 'osigs/11_Osigs_Part-11_Eric.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 12',
    //            description: '',
    //            preacher: {
    //                id:0,
    //                name:'Micheal Duff'
    //            },
    //            media: 'osigs/12_Osigs_Part-12_Mike.mp3'
    //
    //        },
    //        {
    //            title: 'Sermon 13',
    //            description: '',
    //            preacher: 'Micheal Duff',
    //            media: 'osigs/13_Osigs_Part-13_Mike.mp3'
    //        }
    //    ]
    //}]


    //   for (var x in test){

    //      console.log(test[x]);
//var media = new Media(test[x]);
    //media.user = req.user;

    media.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            // res.json(media);
        }
    });
    // }

};

/**
 *
 */
exports.update = function (req, res){

    var id = req.body._id;
    var newSeries = {
        title: req.body.title,
        preachers: req.body.preachers,
        sermons: req.body.sermons,
        detail: req.body.detail,
        book: req.body.book,
        thumbnail: req.body.thumbnail
    }

    Media.update({_id:id}, newSeries).exec(function(err, sermonSeries){
        if(err){
            res.json(err);
        } else {
            res.json(sermonSeries);
        }
    })

}

/**
 * List of Articles
 */
exports.getall = function (req, res) {
    Media.find().exec(function (err, sermonSeries) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(sermonSeries);
        }
    });
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
    console.log(req.sermon);
    res.json(req.sermon);
};

/**
 * Article middleware
 */
exports.mediaByID = function (req, res, next, id) {

    console.log('getID');

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'Media is invalid'
        });
    }

    Media.findById(id).exec(function (err, sermon) {
        if (err) {
            console.log(err);
            return next(err);
        } else if (!sermon) {
            console.log('no sermon');
            return res.status(404).send({
                message: 'No sermon with that identifier has been found'
            });
        }
        console.log(sermon);
        req.sermon = sermon;
        next();
    });
};
