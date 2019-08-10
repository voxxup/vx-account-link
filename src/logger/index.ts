
import * as winston from 'winston';

const { combine, label, timestamp, printf } = winston.format;
const appName: string = 'vx-account-link';

const options: winston.LoggerOptions = {
  level: 'info' || 'error',
  format: combine(label({ label: appName }), timestamp(), printf(info => JSON.stringify(info))),
  transports: [new winston.transports.Console()],
};

const logger = winston.createLogger(options);
export default logger;
