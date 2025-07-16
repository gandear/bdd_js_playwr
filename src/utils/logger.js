// src/utils/logger.js
import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Centralized Winston logger configuration
 */
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp(),
    process.env.NODE_ENV === 'production'
      ? format.json()
      : format.printf(({ level, message, timestamp, ...meta }) =>
          `${timestamp} [${level}]: ${message}` + (Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '')
        )
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../../logs/app.log'),
      handleExceptions: true,
      maxsize: 5 * 1024 * 1024, // 5 MB
      maxFiles: 3,
    }),
  ],
  exitOnError: false,
});

// Convenience wrappers
export const info = (msg, meta) => logger.info(msg, meta);
export const warn = (msg, meta) => logger.warn(msg, meta);
export const error = (msg, meta) => logger.error(msg, meta);
export const debug = (msg, meta) => logger.debug(msg, meta);

// Child logger for context
export const childLogger = (context) => logger.child({ context });

export default logger;
