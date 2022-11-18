const AuthServices = require("../Services/auth.services");
const jwt = require("jsonwebtoken");
const authUser = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const result = await AuthServices.login(email, password);
    const { isPassword } = result;
    if (!isPassword) response.status(401).json({ message: "login error" });
    const { dataValues } = result.query;
    const dataResult = { ...dataValues };
    const token = jwt.sign(dataResult, "todoemlo", { algorithm: "HS512" });
    const generateToken = { ...dataResult, token };
    response.status(200).json(generateToken);
  } catch (error) {
    next({
      message: "Oops login no validate",
      status: 401,
      errorContent: error,
    });
  }
};

module.exports = authUser;
