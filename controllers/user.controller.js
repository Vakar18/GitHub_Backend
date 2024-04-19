const userService = require('../services/user.service');

exports.saveUser = async (req, res) => {
  try {
    const user = await userService.saveUser(req.params.username);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Failed to save user data' });
  }
};

exports.findMutualFollowers = async (req, res) => {
  try {
    const mutualFollowers = await userService.findMutualFollowers();
    res.status(200).json(mutualFollowers);
  } catch (error) {
    console.error('Error finding mutual followers:', error);
    res.status(500).json({ error: 'Failed to find mutual followers' });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const users = await userService.searchUsers(req.query.username, req.query.location);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error searching user data:', error);
    res.status(500).json({ error: 'Failed to search user data' });
  }
};

exports.softDeleteUser = async (req, res) => {
  try {
    await userService.softDeleteUser(req.params.username);
    res.status(200).json({ message: 'User record soft deleted successfully' });
  } catch (error) {
    console.error('Error soft deleting user record:', error);
    res.status(500).json({ error: 'Failed to soft delete user record' });
  }
};

exports.updateUserFields = async (req, res) => {
  try {
    await userService.updateUserFields(req.params.username, req.body);
    res.status(200).json({ message: 'User fields updated successfully' });
  } catch (error) {
    console.error('Error updating user fields:', error);
    res.status(500).json({ error: 'Failed to update user fields' });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers(req.query.sortBy);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
