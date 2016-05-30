import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  url: String,
});

const link = mongoose.model('Links', userSchema);

export default link;