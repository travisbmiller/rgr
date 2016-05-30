import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
});

const employee = mongoose.model('Employee', userSchema);

export default employee;