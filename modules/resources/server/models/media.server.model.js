'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MediaSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  thumbnail: {
    type: String,
    default: '',
    trim: true
  },
  detail: {
    type: String,
    default: '',
    trim: true
  },
  position: {
    type: Number,
    default: 0
  },
  hideSermon: {
    type: Boolean,
    default: true
  },
  book: [],
  sermons: [],
  verses:[],
  preachers: []
});

mongoose.model('Media', MediaSchema);
