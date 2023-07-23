import logger from "../logger";
import { verifyAuthToken } from "../utils/token";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      logger.error("No token provided");
      return res.status(401).json({
        message: "No token provided",
        success: false,
      });
    }
    const decoded =verifyAuthToken(token);
    if (!decoded) {
        logger.error("Invalid token");
        return res.status(401).json({
            message: "Invalid token",
            success: false,
        });
    }
    req.user = decoded;
    next();
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
