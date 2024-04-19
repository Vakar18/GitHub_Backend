
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: String,
  avatarUrl: String,
  location: String,
  blog: String,
  bio: String,
  followers: [{ type: String }],
  following: [{ type: String }],
  public_repos: Number,
  public_gists: Number,
  created_at: Date,
  deleted: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
