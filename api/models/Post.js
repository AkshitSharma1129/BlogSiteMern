const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},//US AUTHOR KA IE REFERNCE IS OF THAT USER
}, {
  timestamps: true,
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;