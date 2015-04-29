var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  _id:          Number,
  title:        String,
  author:       String,
  content:      String
});

var Post = mongoose.model('posts', PostSchema);

module.exports = Post;
