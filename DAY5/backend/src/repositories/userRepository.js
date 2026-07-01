const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");
const collection = () => getDB().collection("users");
const createUser = async (user) => {
  return await collection().insertOne(user);
};
const getUsers = async () => {
  return await collection().find().toArray();
};
const getUserById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};
const updateUser = async (id, data) => {
  return await collection().updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: data,
    },
  );
};
const deleteUser = async (id) => {
  return await collection().deleteOne({
    _id: new ObjectId(id),
  });
};
module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
