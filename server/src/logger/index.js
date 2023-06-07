import morgan from "morgan";
import winston from "winston";
import path from "path";

const { format } = winston;
const { combine, timestamp, json } = format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const logFormat =  winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logger = winston.createLogger({
  format: logFormat,
  level: level(),
  levels,
  transports: [
    new winston.transports.Console({ level: "http" }),
    new winston.transports.File({
      filename: path.resolve(__dirname, "../logs/app-error.log"),
      level: "error",
      format: combine(timestamp(), json()),
    }),
  ],
});

export const morganMiddleware = morgan(
  ":method :url :status - :response-time ms",
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

export default logger;
