const Users = require("../models/users.models");
const bcrypt = require("bcrypt");

class AuthServices {
  static async login(email, password) {
    try {
      const query = await Users.findOne({
        where: { email },
        attributes: ["id", "password", "email"],
      });
      if (!query) return false;
      const isPassword = bcrypt.compareSync(password, query.password);
      return { isPassword, query };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
