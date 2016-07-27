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
