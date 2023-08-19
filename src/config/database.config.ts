import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  ip: process.env.DB_IP,
  port: process.env.DB_PORT,
  auth: {
    id: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
}));
