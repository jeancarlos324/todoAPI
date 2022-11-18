const jwt = require("jsonwebtoken");

const authVerification = async (request, response, next) => {
  try {
    const { userId } = request.params;
    let token = request.headers.authorization;
    token = token?.replace("Bearer ", "");
    const verifyToken = jwt.verify(token, "todoemlo", { algorithm: "HS512" });
    const { id } = verifyToken;
    console.log(verifyToken);
    if (verifyToken) {
      next();
    }
  } catch (error) {
    next({
      message: "Cannot get info tasks",
      status: 401,
      errorContent: error,
    });
  }
};

module.exports = authVerification;
