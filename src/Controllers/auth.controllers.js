const AuthServices = require("../Services/auth.services");
const jwt = require("jsonwebtoken");
const authUser = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const result = await AuthServices.login(email, password);
    const { isPassword } = result;
    if (!isPassword) response.status(401).json({ message: "login error" });
    const query = result.query;
    const token = jwt.sign({ query }, "todoemlo", { algorithm: "HS512" });
    const generateToken = { ...query.dataValues, token };
    response.status(200).json(generateToken);
  } catch (error) {
    next({
      message: "Oops login no valdiate",
      status: 401,
      errorContent: error,
    });
  }
};

module.exports = authUser;
