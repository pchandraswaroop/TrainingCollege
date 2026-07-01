const userRepository = require("../repositories/userRepository");

const createUser = async (userData) => {
  return await userRepository.createUser(userData);
};
const deleteUser = async (id) => {
  return await userRepository.deleteUser(id);
};
const getAllUsers = async () => {
  return await userRepository.getUsers();
};
const getUserById = async (id) => {
  return await userRepository.getUserById(id);
};
const updateUser = async (id, data) => {
  return await userRepository.updateUser(id, data);
};
module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  getAllUsers,
};
