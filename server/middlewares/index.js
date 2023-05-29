const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY


module.exports.logger = (req, res, next) => {
  console.log(`Request method: ${req.method} and request path: ${req.path}`);
  next();
};

module.exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const { id, email } = jwt.verify(token, SECRET_KEY);
    req.user = {
      id,
      email,
    };
    next();
  } catch (error) {
    res.redirect("/logout");
  }
};