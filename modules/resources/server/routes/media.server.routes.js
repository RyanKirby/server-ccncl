'use strict';

/**
 * Module dependencies.
 */
var articlesPolicy = require('../policies/media.server.policy.js'),
    media = require('../controllers/media.server.controller.js');

module.exports = function (app) {
    // Articles collection routes


    app.route('/createmedia')
        .post(media.create);

    //app.route('')

    app.route('/getsermonseries')
        .get(media.getall);

    app.route('/updatesermonseries')
        .post(media.update);

    // Single article routes
    app.route('/sermon/:mediaId')
        .get(media.read);
      //  .put(articles.update)
      //  .delete(articles.delete);

    // Finish by binding the article middleware
    app.param('mediaId', media.mediaByID);

    // Single article routes
    //app.route('/api/media/:articleId').all(articlesPolicy.isAllowed)
    //  .get(articles.read)
    //  .put(articles.update)
    //  .delete(articles.delete);

    // Finish by binding the article middleware
//  app.param('mediaId', articles.articleByID);
};
