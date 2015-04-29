var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  _id:          Number,
  post_id:      Schema.Types.ObjectId,
  author:       String,
  content:      String
});

var Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;

