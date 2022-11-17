const { request, response } = require("express");
const UsersServices = require("../Services/users.services");

const getAllUsers = async (request, response, next) => {
  try {
    const result = await UsersServices.getAll();
    response.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getById(userId);
    response.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserWithAddress = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getAddressUser(userId);
    response.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserTask = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await UsersServices.getTask(userId);
    response.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (request, response, next) => {
  try {
    const newUser = request.body;
    const result = await UsersServices.add(newUser);
    response.status(201).json(result);
    return result;
  } catch (error) {
    next({ status: 400, errorContent: error });
  }
};

const updateUser = async (request, response, next) => {
  try {
    const { id } = request.params;
    const dataUpdate = request.body;
    const result = await UsersServices.update(dataUpdate, id);
    response.status(200).json(result);
    // return result;
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, an error has occurred now",
    });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUserTask,
  createUser,
  updateUser,
};
