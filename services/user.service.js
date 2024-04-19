const axios = require('axios');
const User = require('../models/user.model');

exports.saveUser = async (username) => {
  let user = await User.findOne({ username });

  if (!user) {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;

    user = new User({
      username: userData.login,
      name: userData.name,
      avatarUrl: userData.avatar_url,
      location: userData.location,
      blog: userData.blog,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      public_gists: userData.public_gists,
      created_at: userData.created_at,
    });
    await user.save();
  }
  return user;
};

exports.findMutualFollowers = async () => {
  const mutualFollowers = await User.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'username',
        foreignField: 'followers',
        as: 'friends',
      },
    },
    {
      $match: {
        'friends.followers': '$username',
        'friends.username': '$followers',
      },
    },
  ]);
  return mutualFollowers;
};

exports.searchUsers = async (username, location) => {
  const users = await User.find({
    $or: [
      { username: { $regex: username, $options: 'i' } },
      { location: { $regex: location, $options: 'i' } },
    ],
  });
  return users;
};

exports.softDeleteUser = async (username) => {
  await User.findOneAndUpdate({ username }, { deleted: true });
};

exports.updateUserFields = async (username, fields) => {
  await User.findOneAndUpdate({ username }, fields);
};

exports.listUsers = async (sortBy) => {
  const users = await User.find().sort(sortBy);
  return users;
};
