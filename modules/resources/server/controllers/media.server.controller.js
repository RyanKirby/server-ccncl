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
    console.log('create media');

    console.log(req.body);

    var title = '', preachers = [], sermons = [], detail = '', book = '', thumbnail = '', position=0, hideSermon = true;

    if (req.body.title) {
        title = req.body.title;
    }
    if (req.body.preachers) {
        preachers = req.body.preachers;
    }
    if (req.body.sermons) {
        sermons = req.body.sermons;
    }
    if (req.body.detail) {
        detail = req.body.detail;
    }
    if (req.body.book) {
        book = req.body.book;
    }
    if (req.body.thumbnail) {
        thumbnail = req.body.thumbnail;
    }
    if (req.body.position) {
        position = req.body.position;
    }

    if(req.body.hideSermon){
        hideSermon = req.body.hideSermon;
    }


    var newMedia = {
        title: title,
        preachers: preachers,
        sermons: sermons,
        detail: detail,
        book: book,
        thumbnail: thumbnail,
        position:position,
        hideSermon: hideSermon
    };

    console.log(newMedia);

    var media = new Media(newMedia);

    media.save(function (err, media) {
        console.log(media);
        console.log(err);
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json({msg:'ok',data:media});
        }
    });

};

/**
 *
 */
exports.update = function (req, res) {

    console.log('update');
    var id = req.body._id;
    var hideSermon = true;
    if(req.body.hideSermon != true || req.body.hideSermon != true){
        hideSermon = req.body.hideSermon
    };

    var newSeries = {
        title: req.body.title,
        preachers: req.body.preachers,
        sermons: req.body.sermons,
        detail: req.body.detail,
        book: req.body.book,
        thumbnail :req.body.thumbnail,
        position:req.body.position,
        hideSermon: hideSermon
    }

    console.log(newSeries);

    Media.update({_id: id}, newSeries).exec(function (err, sermonSeries) {
        console.log(err);
        console.log(sermonSeries);
        if (err) {
            res.json(err);
        } else {
            res.json({msg:'ok',data:sermonSeries});
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
