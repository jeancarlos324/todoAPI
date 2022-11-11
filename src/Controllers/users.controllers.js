const UsersServices = require("../Services/users.services");

const getAllUsers = async (request, response) => {
  try {
    const result = await UsersServices.getAll();
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (request, response) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getById(userId);
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserWithAddress = async (request, response) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getAddressUser(userId);
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserTask = async (request, response) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getTask(userId);
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getUserById, getUserWithAddress, getUserTask };
